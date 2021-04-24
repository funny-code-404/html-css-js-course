import styled from "styled-components";

const setStylesProgressBar = (stylesProgressBar) => {
  switch (stylesProgressBar) {
    case "light":
      return `
      background-color: #ffffff;
      border: 1px solid #ffffff;
            `;

    default:
      return `
      background-color: #131313;
      border: 1px solid #131313;
      `;
  }
};

export const ProgressBarContainer = styled.div`
  margin-bottom: 30px;

  height: ${(props) =>
    props.heightContainer ? props.heightContainer : "100%"};

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);

  ${(props) => setStylesProgressBar(props.stylesProgressBar)};
`;

export const ProgressBarItem = styled.div`
  height: ${(props) => (props.heightItem ? props.heightItem : "10px")};

  ${(props) =>
    props.backgroundColorItem &&
    `border: 1px solid ${props.backgroundColorItem}`};
  background-image: linear-gradient(90deg, #00f0ff -24%, #ebacfd 125%);
`;

export const Percents = styled.span`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #999999;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
