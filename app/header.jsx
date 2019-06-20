import React from "react";

import AccountsUI from "./accauntsUI";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>My Resolutions</h2>
        <nav>
          <a href="/"> Resolutions </a>
          <a href="/about"> About </a>
        </nav>
        <AccountsUI />
      </header>
    );
  }
}
