import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import history from "../history";

const Approute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
};
export default Approute;
