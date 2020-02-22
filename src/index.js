import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/about";
import Notfound from "./components/notfound";
import Main from "./components/main";
import Userprofile from "./components/userprofile";
import Home from "./components/home";
import Form from "./components/form";
import Axios from "./components/axios";
import Registerbook from "./components/registerbook";
import Updatebook2 from "./components/updatebook2";
import "./App.css";
// ReactDOM.render(<App />, document.getElementById("root"));

const routing = (
  <Router>
    <Switch>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Userprofile} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Form} />
          <Route path="/axios" component={Axios} />
          <Route path="/registerbook" component={Registerbook} />
          <Route path="/updatebook/:id" component={Updatebook2} />
          <Route component={Notfound} />
        </Switch>
      </Main>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
