import React from "react";

function hello(props) {
  return (
    <div>
      <h3>
        Hello {props.name} your email is {props.email}
      </h3>
    </div>
  );
}

export default hello;
