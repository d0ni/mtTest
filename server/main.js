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
  }
});

Meteor.publish("allResolutions", function() {
  return Resolutions.find({ complete: false });
});
