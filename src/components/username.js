import React from "react";

const username = props => <h7>Your username is: {props.username}</h7>;

username.defaultProps = {
  username: "Guest"
};

export default username;
