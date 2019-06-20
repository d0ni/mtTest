import React from "react";

import Header from "./header";

export default class About extends React.Component {
  setVar() {
    console.log("clicked");
    Session.set("test", "Hello");
    console.log(Session.get("test"));
  }

  render() {
    return (
      <div>
        <Header />
        <h1>About Us</h1>
        <p>BlaBlaBla.....</p>
        <button onClick={this.setVar.bind(this)}>Click me</button>
      </div>
    );
  }
}
