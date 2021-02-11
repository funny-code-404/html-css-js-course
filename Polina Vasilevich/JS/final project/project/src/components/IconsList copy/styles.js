import styled from "styled-components";
import { IconContainer } from "../Icon/styles";

const setPositionTextIcons = (positionTextIcons) => {
  switch (positionTextIcons) {
    case "left":
      return `
        text-align: left;
      `;
    case "rigth":
      return `
        text-align: right;
      `;
    default:
      return `
        text-align: center;
      `;
  }
};

const setPositionIcons = (positionIcons) => {
  switch (positionIcons) {
    case "left":
      return `
        display: flex;
        ${IconContainer} {
            align-items: start;
            margin-right: 20px;
        } 
      `;
    default:
      return ``;
  }
};

export const ContentContainer = styled.div`
  ${(props) => setPositionTextIcons(props.positionTextIcons)};
  ${(props) => setPositionIcons(props.positionIcons)};
`;
