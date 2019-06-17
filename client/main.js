import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { renderRoutes } from "./router";

import App from "./app";

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("app"));
});
