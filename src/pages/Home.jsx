import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core/";
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
  let books = productItems.filter((el) => el.category === "Books").splice(0, 4);
  let clothings = productItems
    .filter((el) => el.category === "Clothings")
    .splice(0, 4);
  let furniture = productItems
    .filter((el) => el.category === "Furniture")
    .splice(0, 4);

  return (
    <Container className={classes.root} maxWidth="xl">
      <CardsContainer title={"Most Popular"} items={popular} />
      <CardsContainer
        title={"Trending Mobiles"}
        items={mobiles}
        viewAll={() => history.push("/search/mobiles")}
      />
      <CardsContainer
        title={"Popular Books"}
        items={books}
        viewAll={() => history.push("/search/books")}
      />
      <CardsContainer
        title={"Top Clothings"}
        items={clothings}
        viewAll={() => history.push("/search/clothings")}
      />
      <CardsContainer
        title={"Discounted Furniture"}
        items={furniture}
        viewAll={() => history.push("/search/clothings")}
      />
    </Container>
  );
};

export default Home;
