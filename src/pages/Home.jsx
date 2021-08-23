import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Paper } from "@material-ui/core/";
import BasicCard from "../components/BasicCard";
import { useSelector } from "react-redux";
import CardsContainer from "../components/CardsContainer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { productItems } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();
  // let data = productItems.slice().sort(() => Math.random() - 0.5);
  let popular = productItems.filter((el) => el.popular);
  let mobiles = productItems
    .filter((el) => el.category === "Mobiles")
    .splice(0, 4);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  //let data = productItems.slice().sort(() => Math.random() - 0.5);
  let data = productItems;

  const isInWishList = (id) => {
    //console.log(wishlistItems[id] !== undefined);
    return wishlistItems[id] !== undefined;
  };

  return (
    <Container className={classes.root} maxWidth="xl">
      <CardsContainer title={"Customer Favorites"} items={popular} />
      <CardsContainer
        title={"Mobiles"}
        items={mobiles}
        viewAll={() => history.push("/search/mobiles")}
      />
      {/* <Grid
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
              isInWishlist={isInWishList(elem.id)}
            />
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default Home;
