import {
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  ShipContainer: {},
  shippingLeft: {
    margin: theme.spacing(8, 4, 8, 4),
    textAlign: "center",
  },
  shippingRight: {
    minHeight: "100%",
    width: "100vmin",
    margin: theme.spacing(4, 2, 4, 2),
    display: "grid",
    placeItems: "center",
  },
  paper: {
    minWidth: "40%",
    padding: theme.spacing(2, 4),
  },
}));

const ShippingAddress = ({ name }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: name,
    street: "",
    city: "",
    state: "",
    pin: "",
  });
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
            helperText="Enter your Name"
            margin="dense"
            multiline
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="text"
            name="street"
            label="Line 1"
            helperText="Enter your Street Address"
            margin="dense"
            multiline
            rows={2}
            value={formData.street}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, street: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="text"
            name="city"
            label="City"
            helperText="Enter your City"
            value={formData.city}
            margin="dense"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, city: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="text"
            label="State"
            helperText="Enter your State"
            value={formData.state}
            margin="dense"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, state: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="number"
            label="Pin Code"
            value={formData.pin}
            helperText="Enter your Pin code"
            margin="dense"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, pin: e.target.value }))
            }
          />
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
              {formData.name && `${formData.name}`}
              <br />
              {formData.street && `${formData.street},`}
              <br />
              {formData.city && `${formData.city},`}
              <br />
              {formData.state && `${formData.state},`}
              <br />
              {formData.pin && `${formData.pin}`}
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShippingAddress;
