import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Hello from "./components/hello";
import { Button } from "reactstrap";

function App() {
  return (
    <Container>
      <Hello name="Edith" />
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
