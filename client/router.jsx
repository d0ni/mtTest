import React from "react";
import { mount } from "react-mounter";
import { FlowRouter } from "meteor/kadira:flow-router";

import { MainLayuot } from "./layouts/MainLayout";
import App from "./app";

FlowRouter.route("/", {
  action() {
    mount(MainLayuot, {
      content: <App />
    });
  }
});
