import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import Home from "./containers/Home";
import NavBar from "./components/NavBar";
import TimerList from "./containers/timers/TimerList";
import TimerForm from "./containers/timers/TimerForm";
import TimerShow from "./containers/timers/TimerShow";
import { fetchTimers } from "./actions/Timers";

export class App extends Component {
  componentDidMount() {
    this.props.fetchTimers();
  }

  render() {
    if (true) {
      return <h1>Log In Screen</h1>;
    } else {
      return (
        <Router>
          <h1>Hobby Tracker</h1>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/timers" component={TimerList} />
              <Route exact path="/timers/new" component={TimerForm} />
              <Route exact path="/timers/:id" component={TimerShow} />
              <Route render={(props) => <div>There is no cow level</div>} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default connect(null, { fetchTimers })(App);
