import React from "react";
import ReactDOM from "react-dom";

export default class AccountsUI extends React.Component {
  createUser() {
    Meteor.call("createUser", "admin", "admin");
  }

  render() {
    if (Meteor.user()) {
      return <div>In system</div>;
    }
    return (
      <div>
        <button onClick={this.createUser.bind(this)}> Cerate admin </button>
      </div>
    );
  }
}
