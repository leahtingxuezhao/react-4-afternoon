import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { student: [] };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3005/students?id=${this.props.match.params.id}`)
      .then((result) => this.setState({ student: result.data[0] }));
  }

  render() {
    console.log(this.state.student);
    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>
          {this.state.student.first_name} {this.state.student.last_name}
        </h1>
        <p>Grade: {this.state.student.grade}</p>
        <p>Email: {this.state.student.email}</p>
      </div>
    );
  }
}
