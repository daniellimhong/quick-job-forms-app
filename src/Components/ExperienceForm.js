import React, { Component } from 'react';
import WorkExperience from './Sub-Components/WorkExperience';
import { Container, Input, Select, InputName, InputSection, Button} from "./StyledComponents.js";

import "../App.css"



class ExperienceForm extends Component {
    // state = {

    // }

    //! lifecylce method for iniating newExperience 
    //! bc of possibilities of moving forward and backward in pages, add if statement = if this.props.workexperience is empty, add newExperience

    componentDidMount(){
        if (this.props.workExperience.length === 0){
            this.props.addExperience();
        }
        console.log(this.props.workExperience)
    }

    render(){
        const { workExperience, backHandler, nextHandler, addExperience } = this.props;

        let mappedExperiences = workExperience.map(experience => {
            return (
                <WorkExperience 
                    key={experience.id}
                    index={experience.id}
                    company={experience.company}
                    position={experience.position}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    isCurrent={experience.isCurrent}
                    workChangeHandler={this.props.workChangeHandler}
                    deleteExperience={this.props.deleteExperience}
                />
            )
        })

        console.log("in experience form: " + workExperience.length)

        return (
            <Container>
                {workExperience.length > 0 && mappedExperiences}
                {/* {mappedExperiences} */}
                <Button onClick={addExperience}>Add Experience</Button>
                <Button onClick={backHandler}>Back</Button>
                <Button>Review</Button>
            </Container>
        )
    }
}

export default ExperienceForm;