import React, { Component } from "react";
// import { response } from "express";

import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = { math: [], english: [], biology: [] };
  }

  render() {
    console.log(this.state.math);
    return (
      <div className="box">
        <Link to="/math">
          <button className="btn">Math 1010</button>
        </Link>
        <Link to="/english">
          <button className="btn">English 2010</button>
        </Link>
        <Link to="/bio">
          <button className="btn">Biology 2020</button>
        </Link>
      </div>
    );
  }
}
