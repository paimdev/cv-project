import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      phone: "",
      email: "",
      submitedInput: { name: "", email: "", phone: "" },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, phone } = this.state;
    this.setState({
      submitedInput: { name: name, email: email, phone: phone },
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
          <button type="submit">Add information</button>
        </form>
        <div>
          <p>{this.state.submitedInput.name}</p>
          <p>{this.state.submitedInput.email}</p>
          <p>{this.state.submitedInput.phone}</p>
        </div>
      </div>
    );
  }
}

export default App;
