import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Math extends Component {
  constructor() {
    super();
    this.state = { math: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:3005/students").then((result) => {
      this.setState({
        math: result.data.filter((item) => item.class == "MATH1010"),
      });
    });
  }

  render() {
    const mathStudents = function () {
      this.state.math.map((item) => {
        return <div key={item.id}>{item.first_name}</div>;
      });
    };
    console.log(this.state.math);
    return (
      <div>
        <h1>MATH1010</h1>
        <h2>ClassList:</h2>
        <div>
          {this.state.math.map((item) => {
            return (
              <Link to={{ pathname: `/student/${item.id}` }}>
                <div key={item.id}>
                  {item.first_name} {item.last_name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
