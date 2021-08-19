import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { addCartItem } from "../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { setCurrentProduct } from "../store/slices/productsSlice";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "25rem",
    margin: "2rem",
    padding: "1rem",
    boxShadow: "0 0 0.2rem 0 #000",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
}));

const BasicCard = ({ id, title, price, imageUrl, category, specs }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const currentUser = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  let m = 50;
  const d = new Date();
  const updated = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes() + m,
    d.getSeconds()
  );
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day =
    d.getDay() === updated.getDay()
      ? "Today"
      : d.getDay() + 1 === updated.getDay()
      ? "Tomorrow"
      : daysList[updated.getDay()];
  const month = monthList[updated.getMonth()];
  const date = updated.getDate();
  return (
    <Link
      to={"product/" + id}
      onClick={() => {
        dispatch(
          setCurrentProduct({ id, title, price, imageUrl, category, specs })
        );
      }}
    >
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardHeader title={title} subheader={category} />
        <CardContent>
          Get it by {day}, {month} {date} after {m} minutes
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              dispatch(
                addCartItem({
                  id,
                  title,
                  price,
                  imageUrl,
                  category,
                  specs,
                  quantity: 1,
                })
              );
            }}
          >
            🛒
          </IconButton>
          <CardContent>Price Rs. {price}</CardContent>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => {
              handleExpandClick();
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};

export default BasicCard;
