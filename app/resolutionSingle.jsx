import React from "react";

export default class ResolutionSingle extends React.Component {
  toggleCheked() {
    Meteor.call(
      "toggleResolution",
      this.props.resolution._id,
      this.props.resolution.complete
    );
  }

  deleteResolution() {
    Meteor.call("deleteResolution", this.props.resolution._id);
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          readOnly={true}
          checked={this.props.resolution.complete}
          onClick={this.toggleCheked.bind(this)}
        />
        {this.props.resolution.text + " "}
        <button
          className="btn-cancel"
          onClick={this.deleteResolution.bind(this)}
        >
          &times;
        </button>
      </li>
    );
  }
}
