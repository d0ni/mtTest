import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import { Mongo } from "meteor/mongo";

import ResolutionForm from "./resolutionForm";
import ResolutionSingle from "./resolutionSingle";
import AccountsUI from "./accauntsUI";

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("allResolutions")
      }
    };
  }

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    let res = this.resolutions();
    if (res.length) {
      res = this.resolutions();
    } else {
      res.push({ text: "no data" });
    }

    return (
      <div>
        <header>
          <h2>My Resolutions</h2>
          <nav>
            <a href="/"> Resolutions </a>
            <a href="/about"> About </a>
          </nav>
          <AccountsUI />
        </header>
        <h1> My Resolutions </h1>
        <ResolutionForm />
        <ul>
          {this.resolutions().map(resolution => {
            return (
              <ResolutionSingle resolution={resolution} key={resolution._id} />
            );
          })}
        </ul>
      </div>
    );
  }
}
