import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core/";
import BasicCard from "../components/BasicCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const data = [1, 2, 3, 4];
  return (
<<<<<<< HEAD
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
            <BasicCard />
          </Grid>
        ))}
      </Grid>
=======
    <div>
      <BasicCard />
>>>>>>> origin/dev
    </div>
  );
};

export default Home;
