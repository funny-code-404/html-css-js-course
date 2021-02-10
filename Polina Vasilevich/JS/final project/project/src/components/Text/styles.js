import styled, { css } from "styled-components";

const generalStyles = css`
  font-family: OpenSans;
`;

const setFontSizeTitle = (fontSizeTitle) => {
  switch (fontSizeTitle) {
    case "xs":
      return `
                font-size: 16px;
                font-weight: 600px;
                letter-spacing: 0.05em;
            `;
    case "sm":
      return `font-size: 18px;`;

    case 'm':
      return `
          font-size: 30px;
          line-height: 50px;
          font-weight: 300;
      `

    case "lg":
      return `font-size: 60px;
              line-height: 60px;`;
    
    case 'big': 
      return `
            font-size: 72px;
      `
    default:
      return `font-size: 36px;
      font-weight: 300;`;
  }
};

const setFontWeightTitle = (fontWeightTitle) => {
  switch (fontWeightTitle) {
    case "lg":
      return `font-weight: 600;`;
    default:
      return ``;
  }
};

export const Title = styled.h2`
  ${generalStyles}
  margin-bottom: 15px;
  line-height: 30px;
  ${(props) => setFontSizeTitle(props.fontSizeTitle)};
  ${(props) => setFontWeightTitle(props.fontWeightTitle)};
  color: ${(props) => (props.colorTitle ? props.colorTitle : "#333333")};
`;

export const SubTitle = styled.p`
  ${generalStyles}
  margin: 20px 0;
  font-size: ${(props) => (props.fontSizeSubTitle ? props.fontSizeSubTitle : "18px")};
  line-height: 36px;
  font-weight: 300;
  color: ${(props) => (props.colorSubTitle ? props.colorSubTitle : "#999999")};
`;

export const Text = styled.p`
  ${generalStyles}
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: ${(props) => (props.colorText ? props.colorText : "#575757")};

  white-space: pre-line;
`;

export const Line = styled.div`
  ${generalStyles}
  display: inline-block;
  margin: 15px 0;
  width: ${(props) => (props.widthLine ? props.widthLine : "100px")};
  height: 1px;
  background-color: #000000;
  background-image: linear-gradient(90deg, #00f0ff -25%, #ebacfd 125%);
`;

const setPositionText = (positionText) => {
  switch (positionText) {
    case "right":
      return `
                text-align: right;
            `;
    case "left":
      return `
                text-align: left;
        `;
    default:
      return ` text-align: center;`;
  }
};

export const TextContainer = styled.div`
  ${(props) => setPositionText(props.positionText)};
`;
