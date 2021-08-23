import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core/";
import BasicCard from "../components/BasicCard";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { productItems } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  // let data = productItems.slice().sort(() => Math.random() - 0.5);
  console.log(cartItems);
  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {productItems.map((elem) => (
          <Grid item xs={12} sm={6} md={3} key={productItems.indexOf(elem)}>
            <BasicCard
              id={elem.id}
              title={elem.title}
              price={elem.price}
              imageUrl={elem.imgs[0]}
              category={elem.category}
              eta={elem.eta}
              elem={elem}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
