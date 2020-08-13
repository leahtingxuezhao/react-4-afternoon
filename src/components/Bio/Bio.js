import React, { Component } from "react";
import axios from "axios";
export default class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = { biology: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:3005/students").then((result) => {
      this.setState({
        biology: result.data.filter((item) => item.class === "BIO2010"),
      });
    });
  }
  render() {
    return <div>Bio</div>;
  }
}
