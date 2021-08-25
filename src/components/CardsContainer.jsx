import {
  Button,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { Box, Grid } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import BasicCard from "./BasicCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.sm - theme.spacing(34),
    [theme.breakpoints.up("sm")]: {
      width: theme.breakpoints.values.lg - theme.spacing(10),
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: theme.spacing(1, 2),
  },
  heading: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: theme.breakpoints.values.sm - theme.spacing(38),
    [theme.breakpoints.up("sm")]: {
      width: theme.breakpoints.values.lg - theme.spacing(10),
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    overflowX: "scroll",
    msOverflowStyle: "none",
    scrollbarWidth: "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    position: "relative",
  },
  scrollButton: {
    position: "absolute",
    right: 0,
  },
  viewAll: {
    minWidth: theme.spacing(30),
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CardsContainer = ({ title, items, viewAll }) => {
  const classes = useStyles();
  const containerRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const ref = containerRef.current;
    return () => {
      ref.scrollBy({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    };
  }, [containerRef]);

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({
      left: -theme.spacing.call() * 40,
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollRight = () => {
    containerRef.current.scrollBy({
      left: theme.spacing.call() * 40,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Box className={classes.heading}>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
        <Box>
          <IconButton onClick={handleScrollLeft}>
            <ChevronLeft color="primary" />
          </IconButton>
          <IconButton onClick={handleScrollRight}>
            <ChevronRight color="primary" />
          </IconButton>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        className={classes.container}
        innerRef={containerRef}
      >
        {items.map((elem) => (
          <Grid item xs={12} sm={6} md={3} key={items.indexOf(elem)}>
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
        {viewAll ? (
          <Grid item xs={12} sm={6} md={3} key={"viewAll"} onClick={viewAll}>
            <Box className={classes.viewAll} onClick={viewAll}>
              <Button variant="text">View All</Button>
            </Box>
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
};

export default CardsContainer;
