import { Meteor } from "meteor/meteor";
// import { Resolutions } from "../app/app";

Resolutions = new Mongo.Collection("resolutions");

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  addResolution(resolution) {
    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date()
    });
  },
  toggleResolution(id, status) {
    Resolutions.update(id, {
      $set: { complete: !status }
    });
  },
  deleteResolution(id) {
    Resolutions.remove(id);
  }
});

Meteor.publish("allResolutions", function() {
  return Resolutions.find({});
});
