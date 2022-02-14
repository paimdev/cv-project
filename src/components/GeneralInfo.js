import React, { Component } from "react";

class GeneralInfo extends Component {

  render() {
    return (
      <div>
          <h2>General Information</h2>
          <label htmlFor="nameInput">Name:</label>
          <input
            id="nameInput"
            name="name"
            group="generalInfo"
            value={this.props.name}
            onChange={this.props.handleChange}
          />

          <label htmlFor="emailInput">Email:</label>
          <input
            id="emailInput"
            name="email"
            group="generalInfo"
            type="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />

          <label htmlFor="phoneInput">Phone number:</label>
          <input
            id="phoneInput"
            name="phone"
            group="generalInfo"
            type="tel"
            value={this.props.phone}
            onChange={this.props.handleChange}
          />
      </div>
    );
  }
}

export default GeneralInfo;
