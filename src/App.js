import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import Home from "./containers/Home";
import NavBar from "./components/NavBar";

// Timers
import TimerList from "./containers/timers/TimerList";
import TimerListWeekly from "./containers/timers/TimerListWeekly";
import TimerListMonthly from "./containers/timers/TimerListMonthly";
import TimerForm from "./containers/timers/TimerForm";
import TimerShow from "./containers/timers/TimerShow";

// Session
import SignIn from "./containers/sessions/SignIn";
import Register from "./containers/sessions/Register";
import Errors from "./containers/sessions/Errors";
import LogOut from "./containers/sessions/LogOut";
// import FreeTime from "./containers/FreeTime";

// actions
import { categories } from "./actions/Timers";

export class App extends Component {
  componentDidMount() {
    this.props.categories({ id: this.props.id });
  }

  render() {
    if (!this.props.login) {
      return (
        <Router>
          <Errors errors={this.props.errors} />
          <div className="App">
            <switch>
              <Route exact path="/Register" exact component={Register} />
              <Route component={SignIn} />
            </switch>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <h1>Hobby Tracker</h1>
          <div className="App">
            <NavBar />
            {/* <FreeTime free_time={this.props.free_time} /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/timers" component={TimerList} />
              <Route exact path="/timers/daily" component={TimerList} />
              <Route exact path="/timers/weekly" component={TimerListWeekly} />

              <Route
                exact
                path="/timers/monthly"
                component={TimerListMonthly}
              />

              <Route exact path="/timers/new" component={TimerForm} />
              <Route exact path="/timers/:id" component={TimerShow} />
              <Route exact path="/logout" component={LogOut} />
              <Route render={(props) => <div>There is no cow level</div>} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.sessionsReducer.errors,
    login: state.sessionsReducer.login,
    email: state.sessionsReducer.email,
    id: state.sessionsReducer.id,
    free_time: state.sessionsReducer.free_time,
  };
};

export default connect(mapStateToProps, { categories })(App);
