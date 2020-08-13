import React, { Component } from "react";
import axios from "axios";
export default class English extends Component {
  constructor(props) {
    super(props);
    this.state = { english: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:3005/students").then((result) => {
      this.setState({
        english: result.data.filter((item) => item.class === "ENG2010"),
      });
    });
  }
  render() {
    return (
      <div>
        <h1>English</h1>
      </div>
    );
  }
}
