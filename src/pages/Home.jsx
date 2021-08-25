import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core/";
import { useSelector } from "react-redux";
import CardsContainer from "../components/CardsContainer";
import { useHistory } from "react-router-dom";
import LogoIcon from "../components/LogoIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  heroContainer: {
    marginTop: -theme.spacing(2),
    height: theme.spacing(40),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  hero: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tagLine: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
  collections: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { productItems } = useSelector((state) => state.products);
  const history = useHistory();
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
    <>
      <Box className={classes.heroContainer}>
        <Container maxWidth="xl" className={classes.hero}>
          <LogoIcon fontSize="large" id="homeLogo" />
          <Typography
            variant="h2"
            style={{ marginTop: "3rem", textAlign: "center" }}
          >
            onlyStore
          </Typography>
          <Typography variant="h5" component="div" className={classes.tagLine}>
            The only store you need to visit for anything!
          </Typography>
        </Container>
      </Box>
      <Container className={classes.root} maxWidth="xl">
        <Box className={classes.collections}>
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
        </Box>
      </Container>
    </>
  );
};

export default Home;
