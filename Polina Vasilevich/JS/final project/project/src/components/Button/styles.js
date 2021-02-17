import styled from "styled-components";
import { Icon } from "../Icon copy/styles";
const styleFont = `
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  // font-weight: 700;
  
`;

const setWidthButton = (widthButton) => {
  switch (widthButton) {
    case "basic":
      return `width: 270px;`;
    case "auto":
      return `
        width: auto;
        padding: 0 15px;
        height: 40px !important;
      `;
    case "s":
      return `width: 201px;`;

    case "m":
      return `width: 221px;`;

    case "form":
      return `width: 26vw;`;

    case "tweets":
      return `width: 20vw;`;

    default:
      return `width: 270px;`;
  }
};

const setColorButton = (colorButton) => {
  switch (colorButton) {
    case "basic":
      return `
        background-color: #4285f4;
        border: 1px solid #2c6cd6;
      `;

    case "green":
      return `
          background-color: #82B440;
          border: 1px solid #fff;
        `;

    case "transparent":
      return `
              background-color: transparent;
              border: 1px solid #fff;
            `;
    case "grey":
      return `
      background-color: #f6f7f8;
      border: 1px solid #e6e6e6;
        `;

    case "blue":
      return `
      background-color: #37ceff;
      border: 1px solid #fff;
        `;

    default:
      return `
        background-color: #4285f4;
        border: 1px solid #2c6cd6;
      `;
  }
};

const setTypeButton = (typeButton) => {
  switch (typeButton) {
    case "link":
      return ` background-color: transparent;
      border: transparent;
      width: auto !important;
      height: auto !important;
    `;

    default:
      break;
  }
};

const setColorTextButton = (colorTextButton) => {
  switch (colorTextButton) {
    case "blue":
      return `
              color: #4285F4;
              ${Icon} {
                color: #4285F4;
              }
            `;
    case "grey":
      return `
        color: #999999;
        ${Icon} {
                color: #4285F4;
              }
            
        `;

    default:
      return `color: #fff;`;
  }
};

export const Button = styled.button`
  margin-top: 15px;
  display: inline-block;
  ${(props) => setWidthButton(props.widthButton)};
  height: 55px;
  border-radius: 3px;
  outline: none;

  ${styleFont};
  ${(props) => setColorButton(props.colorButton)};
  ${(props) => setColorTextButton(props.colorTextButton)};
  ${(props) => setTypeButton(props.typeButton)};
  cursor: pointer;
`;
