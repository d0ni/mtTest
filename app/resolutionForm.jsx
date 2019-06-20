import React from "react";

export default class ResolutionForm extends React.Component {
  constructor(props) {
    super(props);
    this.resolution = React.createRef();
  }

  addResolution(event) {
    event.preventDefault();

    const ref = this.resolution.current;

    if (ref.value) {
      Meteor.call("addResolution", ref.value.trim(), () => {
        if (!Meteor.userId()) {
          Bert.alert("Please login", "danger", "fixed-top");
        } else {
          ref.value = "";
        }
      });
    }
  }

  render() {
    return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <input
          type="text"
          ref={this.resolution}
          placeholder="Finish React Meteor Series"
        />
      </form>
    );
  }
}
