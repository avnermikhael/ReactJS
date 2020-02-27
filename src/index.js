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
import Signin from "./components/signin";
import "./App.css";
import Logout from "./components/logout";
import Showalluser from "./components/showalluser";
import Editrole from "./components/editrole";
import setAuthToken from "./components/setauthtoken";
import Showorder from "./components/showorder";
// ReactDOM.render(<App />, document.getElementById("root"));

const role = localStorage.getItem("jwtRole");

const routing = (
  <Router>
    <Switch>
      <Main>
        {(() => {
          if (role == "ADMIN") {
            return (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Userprofile} />
                <Route path="/about" component={About} />

                <Route path="/axios" component={Axios} />
                <Route path="/showalluser" component={Showalluser} />
                <Route path="/registerbook" component={Registerbook} />
                <Route path="/updatebook/:id" component={Updatebook2} />
                <Route path="/signin" component={Signin} />
                <Route path="/logout" component={Logout} />
                <Route path="/editrole/:id" component={Editrole} />

                <Route component={Notfound} />
              </Switch>
            );
          } else if (role == "USER") {
            return (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Userprofile} />
                <Route path="/about" component={About} />
                <Route path="/axios" component={Axios} />
                <Route path="/showorder" component={Showorder} />

                <Route path="/logout" component={Logout} />
                <Route component={Notfound} />
              </Switch>
            );
          } else {
            return (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/signin" component={Signin} />
                <Route path="/register" component={Form} />
                <Route component={Notfound} />
              </Switch>
            );
          }
        })()}
      </Main>
    </Switch>
  </Router>
);
const token = localStorage.getItem("jwtToken");
setAuthToken(token);

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
