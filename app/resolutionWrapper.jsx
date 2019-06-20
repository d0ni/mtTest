import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import { Mongo } from "meteor/mongo";

import ResolutionForm from "./resolutionForm";
import ResolutionSingle from "./resolutionSingle";
import Header from "./header";

Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
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
        <Header />
        <h1> My Resolutions - {Session.get("test")} </h1>
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
