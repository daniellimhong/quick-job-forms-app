import React from "react";
import styled from "styled-components";
import StartForm from "./StartForm.js";
import InfoForm from "./InfoForm.js";
import ExperienceForm from "./ExperienceForm.js";
import ReviewForm from "./ReviewForm.js";
import "../App.css";

const FormContainer = props => {
  return (
    <div className="form-container">
      {props.stage === 0 && (
        <StartForm
          fullName={props.fullName}
          address={props.address}
          city={props.city}
          state={props.state}
          zip={props.zip}
          changeHandler={props.changeHandler}
          nextHandler={props.nextHandler}
        />
      )}
      {props.stage === 1 && (
        <ExperienceForm
          workExperience={props.workExperience}
          changeHandler={props.changeHandler}
          workChangeHandler={props.workChangeHandler}
          addExperience={props.addExperience}
          deleteExperience={props.deleteExperience}
          nextHandler={props.nextHandler}
          backHandler={props.backHandler}
        />
      )}
    </div>
  );
};

export default FormContainer;
