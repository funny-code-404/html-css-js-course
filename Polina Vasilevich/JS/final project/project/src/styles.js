import styled from "styled-components";

const setColorText = (colorText) => {
  switch (colorText) {
    case "white":
      return `
                color: #fff;
            `;
    case "gradient":
      return `
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            background-image: linear-gradient(48deg, #00f0ff -21%, #ebacfd 121%);
            `;
    default:
      return `
                color: #000;
            `;
  }
};

const setNumberColumns = (props) =>
  `grid-template-columns: repeat(${props.numberColumns}, 1fr)`;
const setNumberRows = (props) =>
  `grid-template-rows: repeat(${props.numberRows}, 1fr)`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : 0)};
  ${setNumberRows};
  ${setNumberColumns};
  ${(props) => setColorText(props.colorText)};
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  position: relative;
`;

const paddingTopBottom = (props) =>
  props.paddingTopBottom ? props.paddingTopBottom : 0;

export const Wrapper = styled.div`
  padding: ${paddingTopBottom} 19%;
`;
