import React, { Component } from "react";
import Avatarprofile from "./avatarprofile";
import Username from "./username";

export default class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="card-container">
        <Avatarprofile />
        <h3>Avner</h3>
        <h6>Indonesia</h6>
        <p>
          <Username username="avnermikhael" /> <br />
        </p>
      </div>
    );
  }
}
