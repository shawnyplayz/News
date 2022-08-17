import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, NavLink, Route, Link, Switch } from "react-router-dom";
import Home from '../Home/Home';
import Bookmark from '../Bookmark/Bookmark';
import './Dashboard.css'
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-2">
            <div class="page-wrapper chiller-theme toggled">
              <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fas fa-bars"></i>
              </a>
              <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                  <div className="sidebar-header">
                    <div className="user-pic">
                      <img className="img-responsive img-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFXiJ7c2zSE67AlROJYCnk46mggZwfmts5BFy3sTbPg&s.jpg"
                        alt="User picture" />
                    </div>
                    <div className="user-info">
                      <span className="user-name">
                        <strong>Shawn Almeida</strong>
                      </span>
                      <span className="user-role">Administrator</span>
                      <span className="user-status">
                        <i className="fa fa-circle"></i>
                        <span>Online</span>
                      </span>
                    </div>
                  </div>
                  <div className="sidebar-menu">
                    <ul>
                      <li>
                        <NavLink to='/Home'>
                          <i className="fa fa-folder"></i>
                          <span>Home</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='/Bookmark'>
                          <i className="fa fa-folder"></i>
                          <span>Bookmarks</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='/'>
                          <i className="fa fa-folder"></i>
                          <span>Log Out</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-lg-10">
            <Switch>
              <Route exact path="/Dashboard"  >
                <Home />
              </Route>
              <Route path="/Home"  >
                <Home />
              </Route>
              <Route path="/Bookmark"  >
                <Bookmark />
              </Route>
            </Switch>
          </div>
        </div >
      </>
    )
  }
}
