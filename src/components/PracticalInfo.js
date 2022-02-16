import React from "react";

const PracticalInfo = (props) => {
  return (
    <div className="flex flex-col pb-4">
      <h2 className="text-center text-xl text-black py-3">
        Practical Experience
      </h2>
      <label htmlFor="schoolNameInput">Company name:</label>
      <input
        className="border rounded-md"
        id="companyNameInput"
        name="companyName"
        value={props.companyName}
        onChange={props.handleChange}
      />

      <label htmlFor="positionInput">Position title:</label>
      <input
        className="border rounded-md"
        id="positionInput"
        name="positionTitle"
        value={props.positionTitle}
        onChange={props.handleChange}
      />
      <label htmlFor="taskInput">Main tasks:</label>
      <input
        className="border rounded-md"
        id="taskInput"
        name="mainTasks"
        value={props.mainTasks}
        onChange={props.handleChange}
      />
      <h3>Date of work:</h3>
      <label htmlFor="dateInput" className="text-sm">
        From:
      </label>
      <input
        className="border rounded-md"
        id="dateFromWorkInput"
        name="dateFromWork"
        value={props.dateFromWork}
        placeholder="1990-08-12"
        onChange={props.handleChange}
      />
      <label htmlFor="dateToInput" className="text-sm">
        To:
      </label>
      <input
        className="border rounded-md"
        id="dateToWorkInput"
        name="dateToWork"
        value={props.dateToWork}
        placeholder="1995-08-12"
        onChange={props.handleChange}
      />
    </div>
  );
};

export default PracticalInfo;
