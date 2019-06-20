import React from "react";
import { Router, Route, Switch } from "react-router";

// route components
import MainLayout from "./layout/mainLayout";
import ResolutionWrapper from "./resolutionWrapper";
import About from "./about";

const browserHistory = require("history").createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={ResolutionWrapper} />
      <Route exact path="/about" component={About} />
    </Switch>
  </Router>
);
