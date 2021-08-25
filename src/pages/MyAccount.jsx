import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUserDetails from "../components/EditUserDetails";
import { triggerModal } from "../store/slices/uiSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: "80%",
  },
  detailDiv: {
    padding: theme.spacing(0, 2),
    margin: theme.spacing(3, 0),
  },
  addName: {
    padding: theme.spacing(0.5, 0),
    fontWeight: "500",
  },
}));

const MyAccount = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { email, name, addr } = useSelector((state) => state.auth);
  const { street, city, state, pin } = addr;
  const addrName = addr.name;
  const [activeEditContent, setActiveEditContent] = useState(null);

  const handleEdit = (id) => {
    console.log("work");
    setActiveEditContent(id);
    dispatch(triggerModal(true));
  };

  const getEditContent = (id) => {
    switch (id) {
      case "name":
        return { label: "Name", type: "text", defVal: name };

      case "email":
        return { label: "Email", type: "email", defVal: email };

      default:
        return { label: "", type: "text", defVal: "" };
    }
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4">Your Account</Typography>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid container alignItems="center" item xs={6}>
            <Grid item xs={10}>
              <div className={classes.detailDiv}>
                <Typography variant="h6">Name : </Typography>
                <Typography variant="body1">{name}</Typography>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleEdit("name")}
              >
                Edit
              </Button>
            </Grid>
            <Grid item xs={10}>
              <div className={classes.detailDiv}>
                <Typography variant="h6">Email :</Typography>
                <Typography>{email}</Typography>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleEdit("email")}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.detailDiv}>
              <Typography variant="h6">Address :</Typography>
              {addrName && (
                <Typography className={classes.addName}>{addrName}</Typography>
              )}
              {street && `${street},`}
              <br />
              {city && `${city},`}
              <br />
              {state && `${state},`}
              <br />
              {pin && `${pin}`}
            </div>
          </Grid>
        </Grid>
      </Paper>
      <EditUserDetails
        id={activeEditContent}
        component={getEditContent(activeEditContent)}
      />
    </Container>
  );
};

export default MyAccount;
