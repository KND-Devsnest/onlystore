import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import BasicCard from "../components/BasicCard";
import { Grid, Typography } from "@material-ui/core";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Filter from "../components/searchPage/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "1rem",
    padding: theme.spacing(2, 6),
  },
  container: {
    padding: theme.spacing(1),
  },
  images: {
    maxWidth: "352px",
    maxHeight: "352px",
  },
  imgContainer: {
    textAlign: "center",
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 1),
  },
  filterSave: {
    overflowY: "scroll",
    scrollBehavior: "none",
  },
  filterHeading: {
    textAlign: "center",
  },
  filterContainer: {
    marginTop: "1rem",
  },
}));

const SearchResults = () => {
  const classes = useStyles();
  const { query = "all" } = useParams();
  const [searchData, setSearchData] = useState();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.filterContainer}>
            <div className={classes.filter}>
              <Typography variant="h6">Filters</Typography>
            </div>
            <Filter setSearchData={setSearchData} query={query}></Filter>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Container>
            <Grid container spacing={1}>
              {searchData && searchData.length ? (
                searchData.map((elem, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                ))
              ) : (
                <div>Not Found</div>
              )}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchResults;
