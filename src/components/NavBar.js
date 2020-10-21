import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles({
  media: {
    height: 140,
  },
  work: {
    background: "red",
    padding: "20px 30px",
    margin: "0px 10px",
    maxWidth: 275,
    display: "inline-block",
  },
  root: {
    background: "#006400",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
    textDecoration: "none",
  },
  nav: {
    background: "#20b2aa",
  },
  link: {
    background: "#006400",
    textDecoration: "none",
    color: "white",
    padding: "10px 30px",
  },
  // CREATE TIMER FORMATTING
  clock: {
    background: "black",
    textDecoration: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: 20,
    fontFamily: "sans-serif",
    fontSize: 60,
    font: "#32cd32",
  },
  card: {
    maxWidth: 345,
    minWidth: 345,
    display: "inline-block",
  },
  word: {
    display: "inline-block",
    padding: "10px 20px",
    background: "black",
    color: "#32cd32",
    fontFamily: '"Helvetica Neue"',
    fontSize: 18,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 200,
  },
});

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.nav}>
      <Toolbar>
        <Button color="inherit">
          <NavLink to="/" className={classes.root}>
            Home
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/timers" className={classes.root}>
            Timers
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/timers/new" className={classes.root}>
            Create Timer
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/logout" className={classes.root}>
            Log Out
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
