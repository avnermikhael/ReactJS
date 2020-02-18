import React from "react";

function hello(props) {
  return (
    <div>
      <h3>
        Hello {props.name} you are {props.age} year(s) old, {props.gender}
      </h3>
    </div>
  );
}

export default hello;
