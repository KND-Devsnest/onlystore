import { Paper, Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
  },
  container: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
    padding: "1rem",
  },
  currentImage: {
    maxWidth: "351px",
    maxHeight: "251px",
    borderRadius: "1rem",
    objectFit: "contain",
    transition: "transform 0.2s",
    marginRight: "2rem",
  },

  carouselBar: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginLeft: "1rem",
  },
  carouselImagesContainer: {
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0.5rem",
    marginRight: "0.5rem",
    transition: "0.2s ease-in",
  },
  carouselImages: {
    width: "100px",
    height: "100px",
    display: "inline-block",
    cursor: "pointer",
    transition: "0.2s ease-in",
    borderRadius: "0.5rem",
    objectFit: "contain",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  test: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem",

    overflow: "hidden",

    flexWrap: "no   wrap",
  },
}));
const Carousel = ({ images }) => {
  const classes = useStyles();
  const [imageState, setImage] = useState(images[0]);
  return (
    <Container className={classes.container}>
      <div>
        <Paper className={classes.test}>
          <div className={classes.carouselBar}>
            {images.map((el, index) => (
              <Paper
                className={classes.carouselImagesContainer}
                onClick={() => setImage(images[index])}
                key={index}
              >
                <img
                  className={classes.carouselImages}
                  src={el}
                  alt={"carousel Images"}
                />
              </Paper>
            ))}
          </div>

          <img
            className={classes.currentImage}
            src={imageState}
            alt="currentProduct"
          />
        </Paper>
      </div>
    </Container>
  );
};

export default Carousel;
