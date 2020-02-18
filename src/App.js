import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container } from "reactstrap";
// import Hello from "./components/hello";
// import { Button } from "reactstrap";
// import Clock from "./components/clock";
// import Greetings from "./components/greetings";
import Userprofile from "./components/userprofile";

function App() {
  return (
    <Container>
      {/* <Greetings name="Avner" age="31" gender="male" /> */}
      <Userprofile />
    </Container>

    // <Container>
    //   <Hello name="Edith" email="edith@hello.com" />
    //   <Clock />
    // </Container>
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
