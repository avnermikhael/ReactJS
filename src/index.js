import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Notfound from "./components/notfound";
import Main from "./components/main";
import "./App.css";
import Updatearticle from "./components/updatearticle";
import Allactivities from "./components/activities";
import Addactivity from "./components/addactivity";
import Charts from "./components/charts";
// ReactDOM.render(<App />, document.getElementById("root"));

// const role = localStorage.getItem("jwtRole");

const routing = (
  <Router>
    <Switch>
      <Main>
        <Switch>
          <Route path="/addactivity" component={Addactivity} />
          <Route path="/allactivities" component={Allactivities} />
          <Route path="/charts" component={Charts} />
          <Route path="/updatearticle/:id" component={Updatearticle} />

          {/* <Route component={Notfound} /> */}
        </Switch>
      </Main>
    </Switch>
  </Router>
);
// const token = localStorage.getItem("jwtToken");
// setAuthToken(token);

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
