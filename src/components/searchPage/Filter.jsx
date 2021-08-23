import { Accordion, FormGroup } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Typography } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useEffect } from "react";
import { categories } from "../../assets/data/data";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/styles";
import { searchUtil } from "../../utils/searchUtil";
const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
    height: "100vh",
  },
  forFilter: {
    display: "inline-block",
  },
}));
const Filter = ({ setSearchData, query }) => {
  useEffect(() => {
    console.log("filter", category);
    console.log("useEffect", checkboxes);
    setSearchData(searchUtil(query.toLowerCase(), category, checkboxes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  const [category, setCategory] = useState("All");
  const classes = useStyles();
  const [checkboxes, setCheckBoxes] = useState({});
  function handleRadioCheck(e) {
    setCategory(e.target.value);
    const temp = {};
    if (e.target.value !== "All")
      for (let i in categories[e.target.value].filters) {
        temp[i] = {};
        categories[e.target.value].filters[i].filterList.forEach((el) => {
          temp[i][el] = false;
        });
      }
    setCheckBoxes(temp);
    setSearchData(searchUtil(query.toLowerCase(), e.target.value, checkboxes));
  }
  function handleCheck(e, parentEl) {
    const temp = { ...checkboxes };
    temp[parentEl][e.target.name] = e.target.checked;
    setCheckBoxes(temp);
    setSearchData(searchUtil(query.toLowerCase(), category, checkboxes));
  }
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            aria-label="Categories"
            name="Category"
            value={category}
            onChange={(e) => {
              handleRadioCheck(e);
            }}
          >
            <FormControlLabel
              value="All"
              control={<Radio color="primary" />}
              label="All"
            />
            {Object.keys(categories).map((el, index) => (
              <FormControlLabel
                key={index}
                value={el}
                control={<Radio color="primary" />}
                label={el}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={category === "All" ? true : false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Filters
        </AccordionSummary>
        <AccordionDetails className={classes.forFilter}>
          {category !== "All"
            ? Object.keys(categories[category]["filters"]).map(
                (parentEl, index) => (
                  <div key={index}>
                    {parentEl}
                    <FormGroup>
                      {categories[category]["filters"][parentEl].filterList.map(
                        (el, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={checkboxes[parentEl][el]}
                                onChange={(e) => handleCheck(e, parentEl)}
                                color="primary"
                                name={el}
                              />
                            }
                            label={el}
                          />
                        )
                      )}
                    </FormGroup>
                  </div>
                )
              )
            : ""}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Filter;
