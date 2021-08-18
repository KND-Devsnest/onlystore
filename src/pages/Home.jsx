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
import { products } from "../assets/data/data";

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
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {products.map((elem) => (
          <Grid item xs={12} sm={6} md={4} key={products.indexOf(elem)}>
            <BasicCard
              id={elem.id}
              title={elem.title}
              price={elem.price}
              imageUrl={elem.imgs[0]}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
