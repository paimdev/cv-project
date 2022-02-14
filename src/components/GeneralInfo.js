import React, { Component } from "react";

class GeneralInfo extends Component {

  render() {
    return (
      <div>
          <label htmlFor="nameInput">Name:</label>
          <input
            id="nameInput"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />

          <label htmlFor="emailInput">Email:</label>
          <input
            id="emailInput"
            name="email"
            type="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />

          <label htmlFor="phoneInput">Phone number:</label>
          <input
            id="phoneInput"
            name="phone"
            type="tel"
            value={this.props.phone}
            onChange={this.props.handleChange}
          />
      </div>
    );
  }
}

export default GeneralInfo;
