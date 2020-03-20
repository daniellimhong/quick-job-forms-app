import React, { Component } from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";

class App extends Component {
  state = {
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    workExperience: {},
    submitted: false,
    stage: 0
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  nextHandler = () => {
      this.setState({
      stage: this.state.stage + 1
    }) 
  }

  backHandler = () => {
    this.setState({
      stage: this.state.stage - 1
    }) 
  }

  render() {
    const { fullName, address, city, state, zip, stage, workExperience } = this.state;
    console.log(stage)

    return (
      <div className="App">
        <h2>Job Application Form</h2>
        <FormContainer 
          fullName={fullName}
          address={address}
          city={city}
          state={state}
          zip={zip}
          stage={stage}
          workExperience={workExperience}
          changeHandler={this.changeHandler}
          nextHandler={this.nextHandler}
          backHandler={this.backHandler}
          />
      </div>
    );
  }
}

//! step component
//! form 1: personal info
//! form 2: work experience & cover letter
//! confirmation: review personal info

export default App;
