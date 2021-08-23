import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core/";
import BasicCard from "../components/BasicCard";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(0, 2),
    display: "flex",
    justifyContent: "space-between",
  },
  popularRow: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflowX: "scroll",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { productItems } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  // let data = productItems.slice().sort(() => Math.random() - 0.5);
  let popular = productItems.filter((el) => el.popular);
  console.log(popular);
  return (
    <Container className={classes.root} maxWidth="xl">
      <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.popularRow}>
          {popular.map((elem) => (
            <Grid item xs={3} key={popular.indexOf(elem)}>
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
      </Paper>
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
            />
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default Home;
