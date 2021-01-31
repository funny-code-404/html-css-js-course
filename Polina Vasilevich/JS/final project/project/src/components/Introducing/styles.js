import styled, { css } from "styled-components";

const positionBlock = (position) => {
  switch (position) {
    case "right":
      return `
                margin-left: auto;
            `;
    case "center":
      return `
                text-alight: center;
        `;
    default:
      return `margin-right: auto;`;
  }
};

const positionText = (positionText) => {
  switch (positionText) {
    case "right":
      return `
                text-align: right;
            `;
    case "center":
      return `
                text-align: center;
        `;
    default:
      return ` text-align: left;`;
  }
};

export const ContentContainer = styled.div`
  width: 46%;
  ${(props) => positionBlock(props.position)};
  ${(props) => positionText(props.positionText)};
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 778px;
  background-size: cover;
  background-position: center center;
`;
