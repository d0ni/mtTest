import React from "react";

export default class ResolutionSingle extends React.Component {
  render() {
    return (
      <li>
        {this.props.resolution.text}
        {" # "}
        {this.props.resolution.complete.toString()}
      </li>
    );
  }
}
