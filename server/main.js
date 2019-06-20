import { Meteor } from "meteor/meteor";

Resolutions = new Mongo.Collection("resolutions");

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("allResolutions", function() {
  return Resolutions.find({});
});

Meteor.publish("userResolutions", function() {
  return Resolutions.find({ user: this.userId });
});

Meteor.methods({
  addResolution(resolution) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
  toggleResolution(resolution) {
    if (Meteor.userId() !== resolution.user) {
      throw new Meteor.Error("wrong-user");
    }

    Resolutions.update(resolution._id, {
      $set: { complete: !resolution.complete }
    });
  },
  deleteResolution(resolution) {
    if (Meteor.userId() !== resolution.user) {
      throw new Meteor.Error("wrong-user");
    }

    Resolutions.remove(resolution._id);
  }
});
