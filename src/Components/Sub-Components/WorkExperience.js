import React from 'react';
import { Container, Input, Select, InputName, InputSection, Button} from "../StyledComponents.js";

const WorkExperience = (props) => {

    return (
        <Container>
            <InputName>#{props.index + 1}</InputName>
            <InputSection>
                <InputName>Company</InputName>
                <Input name="company" onChange={props.workChangeHandler}/>
            </InputSection>
            <InputSection>
                <InputName>Position</InputName>
                <Input name="position" onChange={props.workChangeHandler}/>
            </InputSection>
            <InputSection>
                <InputName>Start Date</InputName>
                <Input name="startDate" onChange={props.workChangeHandler}/>
            </InputSection>
            <InputSection>
                <InputName>End Date</InputName>
                <Input name="endDate" onChange={props.workChangeHandler}/>
            </InputSection>
            <InputSection>
                <InputName>Current Job?</InputName>
                <Input name="isCurrent" type="checkbox" onChange={props.changeHandler} />
            </InputSection>
            <Button onClick={(index) => props.deleteExperience(props.index)}>remove</Button>
        </Container>
    )
}

export default WorkExperience;