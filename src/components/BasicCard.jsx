import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { addCartItem } from "../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const BasicCard = () => {
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
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://m.media-amazon.com/images/I/61iP0Q6NLHL._AC_UY218_.jpg"
        title="CPU"
      />
      <CardHeader
        title="Electrobot Gaming Tower PC"
        subheader="Intel Core I9 10th Gen RTX 3070 TI 8GB, 32GB RAM, 1TB HDD, 500GB NVME with 6 RGB Cooling Fans (Core I9 10900K)"
      />
      <CardContent>
        Get it by {day}, {month} {date} after {m} minutes
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            dispatch(
              addCartItem({
                currentUser: currentUser,
                data: { quantity: 12, id: 0, product: "HI" },
              })
            );
          }}
        >
          🛒
        </IconButton>
        <CardContent>Price Rs. 2,00,000</CardContent>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            System: -Intel Core I9 10th Gen Core 3.70GHz (5.30 GHz Max Turbo) |
            (2X16GB) 32GB DDR4-3200 RAM | 1TB HDD | 512GB NVME | Windows 10 Pro
            64-bit Trial Graphics: NVIDIA GeForce RTX 3070 TI 8GB Dedicated
            Gaming Video Card | VR Ready | 1x HDMI | 3x Display Port Special
            Add-Ons: Tempered Glass RGB Gaming Case | 802. 11AC Wi-Fi Included |
            16 Color RGB Lighting Case | No Bloatware Support Helpline Number -
            01140582625 | 2 Years Warranty support from Electrobot | Lifetime
            Tech support
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BasicCard;
