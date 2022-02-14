import React, { Component } from "react";

class PracticalInfo extends Component {
  render() {
    return (
      <div>
        <h2>Practical Experience</h2>
        <label htmlFor="schoolNameInput">Company name:</label>
        <input
          id="companyNameInput"
          name="companyName"
          value={this.props.companyName}
          onChange={this.props.handleChange}
        />

        <label htmlFor="positionInput">Position title:</label>
        <input
          id="positionInput"
          name="positionTitle"
          value={this.props.positionTitle}
          onChange={this.props.handleChange}
        />
        <label htmlFor="taskInput">Main tasks:</label>
        <textarea
          id="taskInput"
          name="mainTasks"
          value={this.props.mainTasks}
          onChange={this.props.handleChange}
        />
        <h3>Date of work</h3>
        <label htmlFor="dateInput">From:</label>
        <input
          id="dateFromWorkInput"
          name="dateFromWork"
          value={this.props.dateFromWork}
          placeholder="1990-08-12"
          onChange={this.props.handleChange}
        />
        <label htmlFor="dateToInput">To:</label>
        <input
          id="dateToWorkInput"
          name="dateToWork"
          value={this.props.dateToWork}
          placeholder="1995-08-12"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default PracticalInfo;
