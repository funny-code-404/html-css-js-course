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

    case "shortcodes":
      return `
      width: 33vw;
      height: 61px;
        `;

    default:
      return `
        width: 26vw;
        height: 61px;

      `;
  }
};

const styles = `
  text-indent: 20px;
  margin-bottom: 19px;
  font-family: OpenSans;
  font-size: 16px;
  outline: none;
  background-color: inherit;
  border-radius: 3px;
  
`;

export const Input = styled.input`
  ${styles};
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
  padding-left: 20px;
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
