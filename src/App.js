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
    workExperience: [], //of objects
    education: [], //of objects
    submitted: false,
    stage: 0
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  workChangeHandler = event => {
    // this.setState(prevState => ({
    //   workExperience: [
    //     // {[event.target.name]: event.target.value}
    //     ...prevState.workExperience,
    //     {[event.target.name]: event.target.value}
    //   ]
    // }))

    const { workExperience } = { ...this.state }
    const currentState = workExperience;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ workExperience: currentState })
  }

  nextHandler = () => {
    this.setState({
      stage: this.state.stage + 1
    });
  };

  backHandler = () => {
    this.setState({
      stage: this.state.stage - 1
    });
  };

  addExperience = () => {
    this.setState(prevState => ({
      workExperience: [
        ...prevState.workExperience,
        {
          id: this.state.workExperience.length, // check this
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          isCurrent: false
        }
      ]
    }));
  };

  deleteExperience = index => {
    this.setState(prevState => ({
      workExperience: prevState.workExperience.filter((_, i) => i !== index)
    }));
  };

  render() {
    const {
      fullName,
      address,
      city,
      state,
      zip,
      stage,
      workExperience,
      education
    } = this.state;
    console.log(stage);
    // console.log(workExperience);
    console.log(workExperience)

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
          education={education}
          changeHandler={this.changeHandler}
          workChangeHandler={this.workChangeHandler}
          nextHandler={this.nextHandler}
          backHandler={this.backHandler}
          addExperience={this.addExperience}
          deleteExperience={this.deleteExperience}
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
