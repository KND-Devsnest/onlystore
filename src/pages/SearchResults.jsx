import React from "react";
import { useParams } from "react-router";
import { searchUtil } from "../utils/searchUtil";
import { useState, useEffect } from "react";
import BasicCard from "../components/BasicCard";
import { Grid } from "@material-ui/core";
const SearchResults = () => {
  const { query } = useParams();
  const [searchData, setSearchData] = useState();
  useEffect(() => {
    setSearchData(searchUtil(query.toLowerCase()));
  }, [query]);
  return (
    <div>
      {searchData && searchData.length ? (
        searchData.map((elem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
    </div>
  );
};

export default SearchResults;
