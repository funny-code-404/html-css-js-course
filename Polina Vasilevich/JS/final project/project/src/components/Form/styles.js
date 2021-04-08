import styled from "styled-components";
import { Button } from "../Button/styles";

const setSizeInput = (sizeInput) => {
  switch (sizeInput) {
    case "tweets":
      return `
      width: 17vw;
      height: 50px;
      margin-bottom: 7px;
        ${Form} {
          align-items: start;
        }
       
      `;

    default:
      return `
        width: 550px;
        height: 61px;
        @media(max-width: 1000px) {
          width: 450px;
        }

      `;
  }
};

const styles = `
  
  margin-bottom: 19px;
  font-family: OpenSans;
  font-size: 16px;
  outline: none;
  background-color: transparent;
  border-radius: 3px;
  
`;

export const Input = styled.input`
  ${styles};
  text-indent: 20px;
  color: ${(props) =>
    props.colorTextInput ? props.colorTextInput : "#999999"};
  border: 1px solid
    ${(props) => (props.borderColorInput ? props.borderColorInput : "#999999")};

  &.notValid {
    border: 1px solid red;
  }
`;

export const Select = styled.select`
  ${styles};
  padding-left: 20px;
  opacity: 0.7;
  cursor: pointer;
  color: ${(props) =>
    props.colorTextInput ? props.colorTextInput : "#999999"};
  border: 1px solid
    ${(props) => (props.borderColorInput ? props.borderColorInput : "#999999")};

  &.notValid {
    border: 1px solid red;
  }
`;

export const Option = styled.option`
  cursor: pointer;
  color: #000;
`;

export const Info = styled.span`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 36px;
  font-weight: 300;
  color: #666666;
  text-align: center;

  margin-top: 13px;
  &.notValid {
    color: red;
  }
`;

export const Textarea = styled.textarea`
  ${styles}
  padding: 20px 0;
  color: ${(props) =>
    props.colorTextInput ? props.colorTextInput : "#999999"};
  border: 1px solid
    ${(props) => (props.borderColorInput ? props.borderColorInput : "#999999")};

  &.notValid {
    border: 1px solid red;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  ${Input} {
    ${(props) => setSizeInput(props.sizeInput)};
  }

  ${Select} {
    ${(props) => setSizeInput(props.sizeInput)};
  }

  ${Textarea} {
    ${(props) => setSizeInput(props.sizeInput)};
  }

  ${Button} {
    ${(props) => setSizeInput(props.sizeInput)};
  }
`;

export const Error = styled.span``;
