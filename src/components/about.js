import React from "react";
import Avatar2 from "./avatar2";

class About extends React.Component {
  render = () => (
    <div class="card-container" height="500px" width="800px">
      <Avatar2 />
      <h3>Travel Blog Management Team</h3>
      <p align="justify" className="mx-4">
        Leaving to travel around the world was simply the best decision of our
        lives! Since that one day in 2012 when we decided around a bottle of
        wine to travel around the world, our lives have been completely
        disrupted. benoit-fabienne-novomonde We travelled full-time for 19
        months from China to South America via Southeast Asia, we made dozens of
        encounters, discovered places that will remain engraved in our memories,
        got to know other cultures, other languages... We first traveled at full
        speed, then slowed down to just take the time... the time to talk, to
        meet, the time that we often lack in our daily lives.
      </p>
    </div>
  );
}

export default About;
