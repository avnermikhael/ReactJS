import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/about";
import Notfound from "./components/notfound";
import Main from "./components/main";
import Userprofile from "./components/userprofile";
import Home from "./components/home";
import Form from "./components/form";
import Axios from "./components/axios";
import Signin from "./components/signin";
import "./App.css";
import Logout from "./components/logout";
import Showalluser from "./components/showalluser";
import Editrole from "./components/editrole";
import Postarticle from "./components/postarticle";
import Updatearticle from "./components/updatearticle";
import Viewarticle from "./components/viewarticle";
import Allarticles from "./components/allarticles";
import Postcomment from "./components/postcomment";
import Reviewcomments from "./components/reviewcomments";
// ReactDOM.render(<App />, document.getElementById("root"));

const role = localStorage.getItem("jwtRole");

const routing = (
  <Router>
    <Switch>
      <Main>
        {(() => {
          if (role === "true") {
            return (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Userprofile} />
                <Route path="/about" component={About} />
                <Route path="/viewarticle/:id" component={Viewarticle} />
                <Route path="/axios" component={Axios} />
                <Route path="/reviewcomments" component={Reviewcomments} />
                <Route path="/showalluser" component={Showalluser} />
                <Route path="/updatearticle/:id" component={Updatearticle} />
                <Route path="/signin" component={Signin} />
                <Route path="/logout" component={Logout} />
                <Route path="/editrole/:id" component={Editrole} />
                <Route path="/allarticles" component={Allarticles} />
                <Route path="/postcomment/:id" component={Postcomment} />

                <Route component={Notfound} />
              </Switch>
            );
          } else if (role === "false") {
            return (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Userprofile} />
                <Route path="/about" component={About} />
                <Route path="/axios" component={Axios} />
                <Route path="/viewarticle/:id" component={Viewarticle} />
                <Route path="/allarticles" component={Allarticles} />
                <Route path="/postarticle" component={Postarticle} />
                <Route path="/postcomment/:id" component={Postcomment} />
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
                <Route path="/allarticles" component={Allarticles} />
                <Route path="/viewarticle/:id" component={Viewarticle} />
                <Route component={Notfound} />
              </Switch>
            );
          }
        })()}
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
