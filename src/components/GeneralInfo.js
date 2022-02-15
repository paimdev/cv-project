import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    return (
      <div className="flex flex-col pb-4">
        <h2 className="text-center text-xl text-slate-900 pb-3">
          General Information
        </h2>
        <label htmlFor="nameInput">Name:</label>
        <input
          className="border rounded-md"
          id="nameInput"
          name="name"
          group="generalInfo"
          value={this.props.name}
          onChange={this.props.handleChange}
        />

        <label htmlFor="emailInput">Email:</label>
        <input
          className="border rounded-md"
          id="emailInput"
          name="email"
          group="generalInfo"
          type="email"
          value={this.props.email}
          onChange={this.props.handleChange}
        />

        <label htmlFor="phoneInput">Phone number:</label>
        <input
          className="border rounded-md"
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
