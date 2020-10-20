import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLogging } from "../../actions/Sessions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignIn = (e) => {
    e.preventDefault();
    this.props.fetchLogging(this.state);
    this.setState({
      password: "",
    });
    this.props.history.push("/");
  };

  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Hobby Tracker
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  render() {
    const classes = this.useStyles;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={this.state.email}
              onChange={this.handleOnChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSignIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => alert("Functionality not working yet.")}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>{this.Copyright}</Box>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email: state.sessionsReducer.email,
  };
};

export default connect(mapStateToProps, { fetchLogging })(SignIn);
