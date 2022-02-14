import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
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
      dateToWork
    } = this.state;

    this.setState({
      submitedInput: {
        name: name,
        email: email,
        phone: phone,
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        dateFrom: dateFromStudy,
        dateTo: dateToStudy,
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <GeneralInfo
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            handleChange={this.handleChange}
          />
          <EducationInfo
            schoolName={this.state.schoolName}
            titleOfStudy={this.state.titleOfStudy}
            dateFromStudy={this.state.dateFromStudy}
            dateToStudy={this.state.dateToStudy}
            handleChange={this.handleChange}
          />
          <PracticalInfo
            companylName={this.state.companyName}
            positionTitle={this.state.positionTitle}
            mainTasks={this.state.mainTasks}
            dateFromWork={this.state.dateFromWork}
            dateToWork={this.state.dateToWork}
            handleChange={this.handleChange}
          />
          <button type="submit">Add information</button>
        </form>
        <div>
          <p>{this.state.submitedInput.name}</p>
          <p>{this.state.submitedInput.email}</p>
          <p>{this.state.submitedInput.phone}</p>
          <p>{this.state.submitedInput.schoolName}</p>
          <p>{this.state.submitedInput.titleOfStudy}</p>
          <p>{this.state.submitedInput.dateFromStudy}</p>
          <p>{this.state.submitedInput.dateToStudy}</p>
          <p>{this.state.submitedInput.companyName}</p>
          <p>{this.state.submitedInput.positionTitle}</p>
          <p>{this.state.submitedInput.mainTasks}</p>
          <p>{this.state.submitedInput.dateFromWork}</p>
          <p>{this.state.submitedInput.dateToWork}</p>
        </div>
      </div>
    );
  }
}

export default App;
