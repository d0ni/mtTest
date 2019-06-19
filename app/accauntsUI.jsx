import React from "react";
import ReactDOM from "react-dom";
import { Accounts } from "meteor/accounts-base";

export default class AccountsUI extends React.Component {
  createUser() {
    Accounts.createUser({ username: "admin", password: "admin" }, console.log);
    // Meteor.call(
    //   "createUser",
    //   { name: "admin", password: "admin" },
    //   (error, data) => {
    //     console.log(error, data);
    //   }
    // );
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
