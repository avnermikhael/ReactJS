import React from "react";
import Avatar from "./avatar";
import Bio from "./bio";

const Home = () => {
  return (
    <div className="card-container">
      <Avatar />
      <h3>Travel Time </h3>
      <h6>Backpacker Travel Blog</h6>
      <p>
        <Bio />
      </p>

      <div className="skills">
        <h6>Top Posts</h6>
        <ul>
          <li>India</li>
          <li>Switzerland</li>
          <li>New Zealand</li>
          <li>Thailand</li>
          <li>Indonesia</li>
          <li>Japan</li>
          <li>South Korea</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
