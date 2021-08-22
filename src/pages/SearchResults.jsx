import React from "react";
import { useParams } from "react-router";
import { searchUtil } from "../utils/searchUtil";
import { useState, useEffect } from "react";
import BasicCard from "../components/BasicCard";
import { Grid } from "@material-ui/core";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Filter from "../components/searchPage/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
    height: "100vh",
  },
  container: {
    padding: "1rem",
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
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} md={2} lg={2}>
          <Paper className={classes.filterContainer}>
            <div className={classes.filter}>
              <h3>Filter</h3>
            </div>
            <Filter setSearchData={setSearchData} query={query}></Filter>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={7} lg={7}>
          <Container>
            <Grid container spacing={1}>
              {searchData && searchData.length ? (
                searchData.map((elem, index) => (
                  <Grid item xs={12} sm={5} md={5} lg={6} key={index}>
                    <BasicCard
                      id={elem.id}
                      title={elem.title}
                      price={elem.price}
                      imageUrl={elem.imgs[0]}
                      category={elem.category}
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
