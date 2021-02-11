import styled from "styled-components";

const styleFont = `
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  // font-weight: 700;
  
`;

const setWidthButton = (widthButton) => {
  switch (widthButton) {
    case "basic":
      return `width: 270px`;

    case "s":
      return `width: 201px`;

    case "m":
      return `width: 221px`;
    default:
      return `width: 270px`;
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

    case "link":
      return `
              background-color: transparent;
              border: transparent;
              color: #4285F4 !important;
              width: 100%;
              height: auto;
            `;
    default:
      return `
        background-color: #4285f4;
        border: 1px solid #2c6cd6;
      `;
  }
};
export const Button = styled.button`
  margin-right: 10px;
  display: inline-block;
  ${(props) => setWidthButton(props.widthButton)};
  height: 55px;
  border-radius: 3px;
  outline: none;

  ${(props) => setColorButton(props.colorButton)};

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
