import React from "react";
import Avatar from "./avatar";
import Bio from "./bio";

const Home = () => {
  return (
    <div class="card-container">
      <Avatar />
      <h3>Taylow Swift</h3>
      <h6>Singer</h6>
      <p>
        <Bio />
      </p>

      <div class="skills">
        <h6>Albums</h6>
        <ul>
          <li>Taylor Swift (2006)</li>
          <li>Fearless (2008)</li>
          <li>Speak Now (2010)</li>
          <li>Red (2012)</li>
          <li>1989 (2014)</li>
          <li>Reputation (2017)</li>
          <li>Lover (2019)</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
