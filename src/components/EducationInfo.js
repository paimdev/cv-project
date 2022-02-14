import React, { Component } from "react";

class EducationInfo extends Component {
  render() {
    return (
      <div>
        <h2>Education Experience</h2>
        <label htmlFor="schoolNameInput">School name:</label>
        <input
          id="shoolNameInput"
          name="schoolName"
          value={this.props.schoolName}
          onChange={this.props.handleChange}
        />

        <label htmlFor="titleInput">Title of study:</label>
        <input
          id="titleInput"
          name="titleOfStudy"
          value={this.props.titleOfStudy}
          onChange={this.props.handleChange}
        />
        <h3>Date of Study</h3>
        <label htmlFor="dateInput">From:</label>
        <input
          id="dateFromInput"
          name="dateFromStudy"
          value={this.props.dateFromStudy}
          placeholder="1990-08-12"
          onChange={this.props.handleChange}
        />
        <label htmlFor="dateToInput">To:</label>
        <input
          id="dateToInput"
          name="dateToStudy"
          value={this.props.dateToStudy}
          placeholder="1995-08-12"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default EducationInfo;
