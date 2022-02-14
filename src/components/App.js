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
      dateFrom: "",
      dateTo: "",
      submitedInput: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, phone, schoolName, titleOfStudy, dateFrom, dateTo } = this.state;
    this.setState({
      submitedInput: {
        name: name, 
        email: email,
        phone: phone,
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        dateFrom: dateFrom,
        dateTo: dateTo,
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
            dateFrom={this.state.dateFrom}
            dateTo={this.state.dateTo}
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
          <p>{this.state.submitedInput.dateFrom}</p>
          <p>{this.state.submitedInput.dateTo}</p>
        </div>
      </div>
    );
  }
}

export default App;
