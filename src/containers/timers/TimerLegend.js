import { useStyles } from "../../components/NavBar";
import React from "react";
import Box from "@material-ui/core/Box";

const TimerLegend = ({ dataEntries }) => {
  const classes = useStyles();

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const newDataEntry = dataEntries.filter(onlyUnique);
  const legends = [];

  const renderLegends = newDataEntry.map((legend, index) => {
    if (
      Math.round(legend.percentage) + "%" === "0%" ||
      legends.includes(legend.category)
    ) {
      return <div></div>;
    } else {
      legends.push(legend.category);
      return (
        <Box
          key={index}
          style={{ background: `${legend.color}` }}
          className={classes.legend}
        >
          {legend.title} - - - {Math.round(legend.percentage) + "%"}
        </Box>
      );
    }
  });
  return <div>{renderLegends}</div>;
};

export default TimerLegend;
