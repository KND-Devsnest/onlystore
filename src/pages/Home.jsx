import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import BasicCard from "../components/BasicCard";
import { products } from "../assets/data/data";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const {productItems} = useSelector(state => state.products);
  let data = productItems.slice().sort(() => Math.random() - 0.5);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={4} key={data.indexOf(elem)}>
            <BasicCard
              id={elem.id}
              title={elem.title}
              price={elem.price}
              imageUrl={elem.imgs[0]}
              category = {elem.category}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
