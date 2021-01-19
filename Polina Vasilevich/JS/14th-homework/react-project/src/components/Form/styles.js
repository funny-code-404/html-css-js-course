import styled from "styled-components";

export const Section = styled.section`
  margin: 1rem auto;
  padding: 1rem;
  width: 100%;
  max-width: 45rem;

  border: 1px solid #d2d1d1;
  background-color: #fff;
  box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.25);
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-gap: 5px;
`;

export const InputTaskName = styled.textarea`
  width: 100%;
  border: 1px solid #cacaca;
  font-size: 1.5rem;
  outline: none;
  &:focus {
    border: 1px solid #8a8a8a;
    background-color: #fefefe;
    box-shadow: 0 0 5px #cacaca;
  }
`;

export const ButtonContainer = styled.span`
  // margin-left: 6px;
`;

export const ButtonAddTask = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid transparent;
  background-color: #2199e8;
  cursor: pointer;
  outline: none;

  color: #fff;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #1583cc;
  }

  &:active {
    box-shadow: 0 0 5px #1583cc;
  }

`;

export const TaskContainer = styled.div`
  padding-right: 20px;
`;


export const Error = styled.div`
  color: red;
`