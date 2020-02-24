import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Counters from "./components/Counter";
import SearchForm from "./components/SearchForm";
import Repos from "./components/Repos";
import SessionStorage from "./components/SessionStorage";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      {/* <SearchForm />
      <Counters />
      <Repos /> */}
      <SessionStorage />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
