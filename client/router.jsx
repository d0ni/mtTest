import React from "react";
import { mount } from "react-mounter";

import { MainLayuot } from "./layouts/MainLayout";
import App from "./app";

FlowRouter.route("/", {
  action() {
    mount(MainLayuot, {
      content: <App />
    });
  }
});
