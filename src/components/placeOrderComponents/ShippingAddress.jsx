import {
  Checkbox,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  ShipContainer: {},
  shippingLeft: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  shippingRight: {
    minHeight: "100%",
    width: "100%",
    padding: theme.spacing(4, 2, 4, 2),
    display: "grid",
    placeItems: "center",
  },
  paper: {
    minWidth: "40%",
    padding: theme.spacing(2, 4),
  },
}));

const ShippingAddress = ({
  data,
  handleChange,
  togglePersistance,
  persistAddress,
}) => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Shipping Address
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Please provide your shipping address.
      </Typography>
      <Grid container className={classes.ShipContainer}>
        <Grid item sm={4} xs={12} className={classes.shippingLeft}>
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
            value={data.name}
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
            value={data.street}
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
            value={data.city}
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
            value={data.state}
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
            value={data.pin}
            helperText="Enter your Pin code"
            margin="dense"
            onChange={handleChange}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Checkbox
              color="primary"
              value={persistAddress}
              onChange={togglePersistance}
            />
            <Typography variant="caption">
              Save Address for future use
            </Typography>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Container className={classes.shippingRight}>
            <Paper
              variant="outlined"
              elevation={3}
              xs={12}
              className={classes.paper}
            >
              <Typography variant="h6" component="h4" gutterBottom>
                Entered Address
              </Typography>
              {data.name && `${data.name}`}
              <br />
              {data.street && `${data.street},`}
              <br />
              {data.city && `${data.city},`}
              <br />
              {data.state && `${data.state},`}
              <br />
              {data.pin && `${data.pin}`}
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShippingAddress;
