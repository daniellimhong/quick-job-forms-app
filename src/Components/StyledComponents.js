import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: ${props => props.width};
`;

export const Select = styled.select``;

export const InputName = styled.p`
  color: black;
  font-size: 14px;
  margin-right: 10px;
`;

export const InputSection = styled.section`
  display: flex;
  //
  margin-top: 20px;
  align-items: center;
  height: 20px;
  // border: 1px solid black;
`;

export const Button = styled.button`

`


