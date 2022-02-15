import React, { Component } from "react";

class EducationInfo extends Component {
  render() {
    return (
      <div className="flex flex-col pb-4">
        <h2 className="text-center text-xl text-slate-900 py-3">
          Education Experience
        </h2>
        <label htmlFor="schoolNameInput">School name:</label>
        <input
          className="border rounded-md"
          id="shoolNameInput"
          name="schoolName"
          value={this.props.schoolName}
          onChange={this.props.handleChange}
        />

        <label htmlFor="titleInput">Title of study:</label>
        <input
          className="border rounded-md"
          id="titleInput"
          name="titleOfStudy"
          value={this.props.titleOfStudy}
          onChange={this.props.handleChange}
        />
        <h3 className="pb-2">Date of study:</h3>
        <label htmlFor="dateInput" className="text-sm">
          From:
        </label>
        <input
          className="border rounded-md"
          id="dateFromInput"
          name="dateFromStudy"
          value={this.props.dateFromStudy}
          placeholder="1990-08-12"
          onChange={this.props.handleChange}
        />
        <label htmlFor="dateToInput" className="text-sm">
          To:
        </label>
        <input
          className="border rounded-md"
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
