import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "../NavBar";
import Clock from "./Clock";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
// import { makeStyles } from "@material-ui/core/styles";

const TimerCard = ({
  timer: { id, name, category, start_time, end_time, total_time, date },
}) => {
  const themes = [
    "work",
    "Entertainment",
    "Collecting",
    "Arts",
    "Games",
    "Model & Electronics",
    "performing arts",
    "sports/outdoor",
    "music",
    "spiritual & mental",
    "food & drink",
    "pets",
  ];
  const classes = useStyles();
  const cate = themes.includes(category) ? category : "card";
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/images/${cate}.jpg`}
          title={`${cate}`}
        />
        <CardActions>
          <NavLink className={classes.link} to={`/timers/${id}`}>
            {name} - {date}
          </NavLink>
          <p>
            Category: {category} {`/images/${cate}.jpg`}
          </p>
          <Clock total_time={total_time} />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default TimerCard;
