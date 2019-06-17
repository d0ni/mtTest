import React from "react";

import { Router, Route, Switch } from "react-router";

// route components
import App from "./app";

const browserHistory = require("history").createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);
