import React, { Component } from "react";
import { Resolutions } from "../db";
import { Mongo } from "meteor/mongo";

export default class App extends Component {
  addResolution(event) {
    event.preventDefault();
    var text = this.refs.resolution.value.trim();

    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    });

    this.refs.resolution.value = "";
  }

  render() {
    return (
      <div>
        <h1> My Resolutions </h1>
        <form
          className="new-resolution"
          onSubmit={this.addResolution.bind(this)}
        >
          <input
            type="text"
            ref="resolution"
            placeholder="Finish React Meteor Series"
          />
        </form>
      </div>
    );
  }
}
