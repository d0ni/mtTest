import React from "react";

export const MainLayout = ({ content }) => (
  <div>
    <header>
      <h2>My Resolutions</h2>
      <nav>
        <a href="/"> Resolutions </a>
        <a href="/about"> About </a>
      </nav>
      <AccountsUI />
    </header>
    <main>{content}</main>
  </div>
);
