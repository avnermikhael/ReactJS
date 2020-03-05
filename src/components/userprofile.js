import React, { Component } from "react";
import axios from "axios";

export default class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { name: "", username: "", email: "", admin: "" } };
  }

  componentWillMount() {
    this.getUserDetails();
  }

  getUserDetails() {
    let userId = localStorage.getItem("jwtId");
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then(response => {
        this.setState(
          {
            name: response.data.data.username,
            username: response.data.data.username,
            email: response.data.data.email
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div class="card-container">
        <h3>{this.state.name}</h3>

        <p>
          Your username is <b> {this.state.username}</b>
        </p>
        <p>
          <b> {this.state.email}</b>
        </p>
      </div>
    );
  }
}
