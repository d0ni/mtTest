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
  },
  createUser(name, pwd) {
    Resolutions.users.createUser({
      user: name,
      pwd: pwd,
      roles: []
    });

    // Meteor.users.createUser({
    //   username: name,
    //   password: pwd
    // });
  }
});

Meteor.publish("allResolutions", function() {
  return Resolutions.find({});
});
