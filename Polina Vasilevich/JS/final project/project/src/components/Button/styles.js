import styled from "styled-components";

const styleFont = `
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  // font-weight: 700;
  
`;

export const Button = styled.button`
  margin: 10px;
  display: inline-block;
  width: ${(props) => (props.widthButton ? props.widthButton : "270px")};
  height: 55px;
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#4285f4"};
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "#2c6cd6")};

  ${styleFont};

  color: ${(props) => (props.colorText ? props.colorText : "#fff")};
  cursor: pointer;
`;

export const Icon = styled.i`
  margin-right: 10px;
  font-size: 16px;
  line-height: 30px;
  // font-weight: 400;
`;
