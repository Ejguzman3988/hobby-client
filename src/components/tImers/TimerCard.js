import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "../NavBar";
import Clock from "./Clock";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TimerUpdate from "./TimerUpdate";
import DeleteTimer from "./DeleteTimer";
import { hashCode, intToRGB } from "../../containers/timers/TimerPie";
// import { makeStyles } from "@material-ui/core/styles";

const TimerCard = ({
  timer: { id, name, category, start_time, end_time, total_time, date },
  user_id,
}) => {
  const [likes, setLikes] = useState(0);
  const handleOnClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };
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
      <CardMedia
        className={classes.media}
        image={`/images/${cate}.jpg`}
        title={`${cate}`}
      >
        <h3
          style={{
            background: "#" + intToRGB(hashCode(category)),
            color: "white",
            marginLeft: "-10px",
          }}
        >
          {category}
        </h3>
        <Clock total_time={total_time} />
        <CardContent
          style={{
            // background: "#" + intToRGB(hashCode(category)),
            background: "transparent",
          }}
        >
          <h3
            style={{
              background: "#f0f8ff",
              color: "black",
              paddingLeft: "15px",
              paddingRight: "15px",
              maxWidth: "100px",
              marginLeft: "29%",
              marginTop: "-10px",
            }}
            className={classes.root}
          >
            {name}
            <Card
              style={{
                background: "purple",
                color: "cyan",
                width: "100%",
                paddingLeft: "15px",
                paddingRight: "15px",
                marginLeft: "-15px",
                fontFamily: "sans-serif",
              }}
            >
              {date.split("-")[1] +
                "/" +
                date.split("-")[2] +
                "/" +
                date.split("-")[0]}
            </Card>
          </h3>
        </CardContent>
        <Card
          style={{
            opacity: "90%",
            maxWidth: "89%",
            height: "150px",
            paddingLeft: "10px",
            background: "#fff7f0",
            paddingTop: "10px",
          }}
        >
          <TimerUpdate
            user_id={user_id}
            id={id}
            start_time={start_time}
            end_time={end_time}
            category={category}
          />
          <DeleteTimer user_id={user_id} id={id} />
        </Card>
      </CardMedia>
    </Card>
  );
};

export default TimerCard;
