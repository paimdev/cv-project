import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";
import GeneratedCV from "./GeneratedCV";
import "../index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filled: false,
      name: "",
      phone: "",
      email: "",
      schoolName: "",
      titleOfStudy: "",
      dateFromStudy: "",
      dateToStudy: "",
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateFromWork: "",
      dateToWork: "",
      submitedInput: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      schoolName,
      titleOfStudy,
      dateFromStudy,
      dateToStudy,
      companyName,
      positionTitle,
      mainTasks,
      dateFromWork,
      dateToWork,
    } = this.state;

    this.setState({
      filled: true,
      submitedInput: {
        name: name,
        email: email,
        phone: phone,
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        dateFromStudy: dateFromStudy,
        dateToStudy: dateToStudy,
        companyName: companyName,
        positionTitle: positionTitle,
        mainTasks: mainTasks,
        dateFromWork: dateFromWork,
        dateToWork: dateToWork,
      },
    });
    console.log(this.state);
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      [e.target.name]: value,
    });
  }

  handleEdit() {
    this.setState({
      filled: false,
    });
  }

  render() {
    const {
      filled,
      name,
      email,
      phone,
      schoolName,
      titleOfStudy,
      dateFromStudy,
      dateToStudy,
      companyName,
      positionTitle,
      mainTasks,
      dateFromWork,
      dateToWork,
    } = this.state;

    return (
      <div className="flex flex-col items-center h-max bg-slate-50">
        {!filled ? (
          <form
            className="flex flex-col bg-white w-3/5 m-6 px-11 shadow-2xl rounded-2xl text-slate-700"
            onSubmit={this.handleSubmit}
          >
            <h1 className="text-center text-5xl text-black py-6">
              CV Generator
            </h1>
            <GeneralInfo
              name={name}
              email={email}
              phone={phone}
              handleChange={this.handleChange}
            />
            <hr />
            <EducationInfo
              schoolName={schoolName}
              titleOfStudy={titleOfStudy}
              dateFromStudy={dateFromStudy}
              dateToStudy={dateToStudy}
              handleChange={this.handleChange}
            />
            <hr />
            <PracticalInfo
              companyName={companyName}
              positionTitle={positionTitle}
              mainTasks={mainTasks}
              dateFromWork={dateFromWork}
              dateToWork={dateToWork}
              handleChange={this.handleChange}
            />
            <hr />
            <button
              type="submit"
              className="self-center my-3 py-3 w-1/3 border rounded-lg bg-neutral-200"
            >
              Submit information
            </button>
          </form>
        ) : (
          <div className="flex flex-col bg-white w-3/5 m-6 px-11 shadow-2xl rounded-2xl text-slate-700">
            <GeneratedCV
              name={this.state.submitedInput.name}
              email={this.state.submitedInput.email}
              phone={this.state.submitedInput.phone}
              schoolName={this.state.submitedInput.schoolName}
              titleOfStudy={this.state.submitedInput.titleOfStudy}
              dateFromStudy={this.state.submitedInput.dateFromStudy}
              dateToStudy={this.state.submitedInput.dateToStudy}
              companyName={this.state.submitedInput.companyName}
              positionTitle={this.state.submitedInput.positionTitle}
              mainTasks={this.state.submitedInput.mainTasks}
              dateFromWork={this.state.submitedInput.dateFromWork}
              dateToWork={this.state.submitedInput.dateToWork}
            />
            <button
              onClick={this.handleEdit}
              className="self-center my-3 py-3 w-1/3 border rounded-lg bg-neutral-200"
            >
              Edit information
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
