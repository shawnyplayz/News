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
              <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
                <i class="fas fa-bars"></i>
              </a>
              <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                  <div class="sidebar-header">
                    <div class="user-pic">
                      <img class="img-responsive img-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFXiJ7c2zSE67AlROJYCnk46mggZwfmts5BFy3sTbPg&s.jpg"
                        alt="User picture" />
                    </div>
                    <div class="user-info">
                      <span class="user-name">
                        <strong>Shawn Almeida</strong>
                      </span>
                      <span class="user-role">Administrator</span>
                      <span class="user-status">
                        <i class="fa fa-circle"></i>
                        <span>Online</span>
                      </span>
                    </div>
                  </div>
                  <div class="sidebar-menu">
                    <ul>
                      <li>
                        <NavLink to='/Home'>
                          <i class="fa fa-folder"></i>
                          <span>Home</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='/Bookmark'>
                          <i class="fa fa-folder"></i>
                          <span>Bookmarks</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- sidebar-menu  --> */}
                </div>
                {/* <!-- sidebar-content  --> */}
              </nav>
            </div>
          </div>
          <div className="col-lg-10">
            <Switch>
              <Route exact path="/Home"  >
                <Home />
              </Route>
              <Route path="/Bookmark"  >
                <Bookmark />
              </Route>
            </Switch>
          </div>
        </div>
      </>
    )
  }
}
