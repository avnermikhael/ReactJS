import React, { Component } from "react";
import Avatar from "./avatar";
import Username from "./username";
import Bio from "./bio";

export default class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="card-container">
        <Avatar />
        <h3>Avner</h3>
        <h6>Indonesia</h6>
        <p>
          <Username username="avnermikhael" /> <br /> <Bio />
        </p>
        {/* <div class="buttons">
          <button class="primary">Message</button>
          <button class="primary ghost">Following</button>
        </div> */}
        <div class="skills">
          <h6>Skills</h6>
          <ul>
            <li>Meteor Shower</li>
            <li>Lord of Vermillion</li>
            <li>Frost Driver</li>
            <li>Chain Lightning</li>
          </ul>
        </div>
      </div>
    );
  }
}
