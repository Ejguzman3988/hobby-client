import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import TimerList from './containers/timers/TimerList'
import TimerForm from './containers/timers/TimerForm'
import TimerShow from './containers/timers/TimerShow'

export class App extends Component {
  render() {
    return (
      <Router>
        <h1>Hobby Tracker</h1>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/timers' component={TimerList} />
            <Route exact path='/timers/new' component={TimerForm} />
            <Route exact path='/timers/:id' component={TimerShow} />
            <Route render={(props) => <div>There is no cow level</div>} />
          
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

