import React from "react";
import { Router, Route, Switch } from "react-router";

// route components
import MainLayout from "./layout/mainLayout";
import App from "./app";

const browserHistory = require("history").createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={App} />
    </Switch>
  </Router>
);
