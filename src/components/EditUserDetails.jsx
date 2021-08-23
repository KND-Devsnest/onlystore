import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import UiModal from "./UiModal";
import { updateUserDetails } from "../store/slices/authSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textfield: {
    margin: theme.spacing(2),
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  submitButton: { margin: theme.spacing(1) },
}));

const EditUserDetails = ({ id, component }) => {
  const classes = useStyles();
  const { label, type, defVal } = component;
  const dispatch = useDispatch();
  const [val, setVal] = useState({ [id]: defVal, error: false });
  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.id]: e.target.value,
      error: false,
    });
  };

  const handleSubmit = () => dispatch(updateUserDetails({ [id]: val[id] }));
  return (
    <UiModal>
      <div className={classes.root}>
        <Typography variant="h6">Update {label}</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            className={classes.textfield}
            fullWidth
            id={id}
            label={label}
            type={type}
            variant="filled"
            onChange={handleChange}
            error={val.error}
            value={val[id]}
          />
          <Button
            className={classes.submitButton}
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            Update Details
          </Button>
        </form>
      </div>
    </UiModal>
  );
};

export default EditUserDetails;

/*
Kachra (Do Not Delete)

<Grid item xs={6}>
              <TextField
                required
                variant="filled"
                type="text"
                name="name"
                label="Name"
                id="name"
                helperText="Enter your Name"
                margin="dense"
                multiline
                value={userDetails.name}
                onChange={handleChange}
              />
              <TextField
                required
                variant="filled"
                type="text"
                name="street"
                id="street"
                label="Line 1"
                helperText="Enter your Street Address"
                margin="dense"
                multiline
                rows={2}
                value={userDetails.addr.street}
                onChange={handleChange}
              />
              <TextField
                required
                variant="filled"
                type="text"
                name="city"
                id="city"
                label="City"
                helperText="Enter your City"
                value={userDetails.addr.city}
                margin="dense"
                onChange={handleChange}
              />
              <TextField
                required
                variant="filled"
                type="text"
                name="state"
                id="state"
                label="State"
                helperText="Enter your State"
                value={userDetails.addr.state}
                margin="dense"
                onChange={handleChange}
              />
              <TextField
                required
                variant="filled"
                type="number"
                name="pin"
                id="pin"
                label="Pin Code"
                value={userDetails.addr.pin}
                helperText="Enter your Pin code"
                margin="dense"
                onChange={handleChange}
              />

*/
