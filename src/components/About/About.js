import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import University from "../University/University";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="about_links">
            About
          </Link>
          <Link to="/about/history" className="about_links">
            History
          </Link>
          <Link to="/about/contact" className="about_links">
            Contact
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route component={University} exact path="/about"></Route>
            <Route component={History} path="/about/history"></Route>
            <Route component={Contact} path="/about/contact"></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
