import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import { Accounts } from "meteor/accounts-base";

export default class AccountsUI extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  createUser() {
    const user = this.username.current;
    const pwd = this.password.current;

    Accounts.createUser({ username: user.value.trim(), password: pwd.value });
  }

  logIn() {
    const user = this.username.current;
    const pwd = this.password.current;

    Meteor.loginWithPassword(user.value.trim(), pwd.value);
  }

  logOut() {
    Meteor.logout();
  }

  render() {
    let usrName;
    if (Meteor.user()) {
      usrName = Meteor.user().username;
    }

    if (Meteor.userId()) {
      return (
        <div>
          <p>
            {usrName}
            <button onClick={this.logOut.bind(this)}> log-out</button>
          </p>
        </div>
      );
    }
    return (
      <div>
        <p>
          Username: <input type="text" ref={this.username} />
        </p>
        <p>
          Password: <input type="password" ref={this.password} />
        </p>

        <button onClick={this.logIn.bind(this)}>Sign-in</button>
        <button onClick={this.createUser.bind(this)}>Sign-up</button>
      </div>
    );
  }
}
