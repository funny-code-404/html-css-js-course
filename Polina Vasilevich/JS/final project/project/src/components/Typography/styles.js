import styled, { css } from "styled-components";

const generalStyles = css`
  font-family: OpenSans;
`;

const setFontSizeTitle = fontSizeTitle => {
    switch(fontSizeTitle) {
        case 'xs': 
            return `
                font-size: 16px;
                letter-spacing: 0.05em;
            `
        case 'sm':
            return `font-size: 18px;`
        default:
            return `font-size: 36px`
    }
}

const setFontWeightTitle = fontWeightTitle => {
    switch(fontWeightTitle) {
        case 'lg':
            return `font-weight: 600;`
        default:
            return `font-weight: 300;`
    }
}


export const Title = styled.h2`
  ${generalStyles}
  margin-bottom: 10px;
  line-height: 30px;
  ${props => setFontSizeTitle(props.fontSizeTitle)};
  ${props => setFontWeightTitle(props.fontWeightTitle)};
  color: ${(props) => (props.color ? props.color : "#333333")};
`;

export const SubTitle = styled.p`
  ${generalStyles}
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 36px;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : "#999999")};
`;

export const Text = styled.p`
  ${generalStyles}
  margin-bottom: 20px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    color: ${(props) => (props.color ? props.color : "#575757")};
`;

export const Line = styled.div`
  ${generalStyles}
  display: inline-block;
  margin: 20px 0;
  width: 100px;
  height: 1px;
  background-color: #000000;
  background-image: linear-gradient(90deg, #00f0ff -25%, #ebacfd 125%);
`;


const setPositionTextContainer = (positionTextContainer) => {
  switch (positionTextContainer) {
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

const setPositionText = (positionText) => {
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

export const TextContainer = styled.div`
    ${props => setPositionTextContainer(props.positionTextContainer)};
    ${props => setPositionText(props.positionText)};
`;


