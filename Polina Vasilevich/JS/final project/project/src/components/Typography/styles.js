import styled, { css } from "styled-components";

const generalStyles = css`
  font-family: OpenSans;
`;

const setSizeTitle = (sizeTitle) => {
  switch (sizeTitle) {
    case "xs":
      return `
                font-size: 16px;
                font-weight: 600;
                letter-spacing: 0.05em;
            `;
    case "s":
      return `font-size: 18px;
              font-weight: 300;
              `;

    case "ss":
      return `font-size: 30px;
              font-weight: 300;
              line-height: 50px;
              `;

    case "m":
      return `
          font-size: 33px;
          font-weight: 300;
      `;

    case "l":
      return `font-size: 36px;
              font-weight: 300;
              `;

    case "xl":
      return `
            font-size: 72px;
            line-height: 60px;
            font-weight: 300;
            letter-spacing: 0.05em;
      `;
    default:
      return `font-size: 36px;
              font-weight: 300;`;
  }
};

const setColorTitle = (colorTitle) => {
  switch (colorTitle) {
    case "white":
      return `
              color: #ffffff;
            `;
    case "black":
      return `
            color: #333333;
              `;
    default:
      return `color: #000000`;
  }
};

export const Title = styled.h2`
  ${generalStyles}
  margin-top: -7px;
  margin-bottom: 15px;
  line-height: 30px;
  ${(props) => setSizeTitle(props.sizeTitle)};
  ${(props) => setColorTitle(props.colorTitle)};

  ${(props) => props.multicoloredTitle && `color: ${props.multicoloredTitle}`}
`;

const setColorSubTitle = (colorSubTitle) => {
  switch (colorSubTitle) {
    case "grey":
      return `
            color: #999999;
            `;
    case "white":
      return `
            color: #b9b9b9;
              `;
    default:
      return `color: #999999`;
  }
};

export const SubTitle = styled.p`
  ${generalStyles}
  max-width: 55ch;

  font-size: ${(props) =>
    props.fontSizeSubTitle ? props.fontSizeSubTitle : "18px"};
  line-height: 36px;
  font-weight: 300;
  ${(props) => setColorSubTitle(props.colorSubTitle)};
`;

const setColorText = (colorText) => {
  switch (colorText) {
    case "grey":
      return `
            color: #999999;
            `;
    case "white":
      return `
            color: #cccccc;
              `;
    default:
      return `color: #575757;
            `;
  }
};

export const Text = styled.p`
  ${generalStyles}
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  ${(props) => setColorText(props.colorText)};

  white-space: pre-line;
`;

const setWidthLine = (widthLine) => {
  switch (widthLine) {
    case "small":
      return `
            width: 70px;
            `;

    default:
      return `width: 100px;
            `;
  }
};

export const Line = styled.div`
  ${generalStyles}
  display: inline-block;
  margin: 15px 0;
  ${(props) => setWidthLine(props.widthLine)};
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
                 align-items: start;
        `;
    default:
      return ` text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                `;
  }
};

export const TextContainer = styled.div`
  ${(props) => setPositionText(props.positionText)};
  ${(props) => setStylesText(props.stylesText)};
`;

const setStylesText = (stylesText) => {
  switch (stylesText) {
    case "icons":
      return `
      ${Title} {
        font-size: 18px;
        line-height: 30px;
        font-weight: 600;
        color: #333333;
      }
      ${Text} {
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        color: #575757;
      }

    `;

    case "mainTitle":
      return `
      ${Title} {
        font-size: 36px;
        line-height: 30px;
        font-weight: 300;
        color: #333333;
      }
      ${SubTitle} {
        font-size: 18px;
        line-height: 36px;
        font-weight: 300;
        color: #999999;
      }
      ${Text} {
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        color: #575757;
      }
    `;

    case "Button":
      return `
      ${Text} {
        font-size: 14px;
        line-height: 30px;
        font-weight: 700;
        color: #ffffff;
      }
     
    `;

    default:
      break;
  }
};
