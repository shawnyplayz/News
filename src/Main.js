import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import * as Logo from './images/tabloid.jpg'
import "./Main.css"

export default class Main extends Component {

  render() {
    return (
      <div className="bgImg">
        <div className='main_container'>
          <Suspense fallback="loading">
            <Router>
              <Switch>
                <Route exact path="/" >
                  <Login />
                </Route>
                <Route path="/News" >
                  <Login />
                </Route>
                <Route path="/Dashboard" >
                  <Dashboard />
                </Route>
                <Route path="/Home" >
                  <Dashboard />
                </Route>
                <Route path="/Bookmark" >
                  <Dashboard />
                </Route>
              </Switch >
            </Router >
          </Suspense >
        </div >
      </div>

    )
  }
}
// function mapStateToProps(state) {
//   return state
// }
// export default connect(mapStateToProps)(Main);