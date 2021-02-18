import styled, { css } from "styled-components";
import { Button } from "../Button/styles";

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
              margin: 0;
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

    case "tweets":
      return `
      font-size: 13px;
      line-height: 30px;
      font-weight: 700;
      letter-spacing: 0.13em;
      color: #333333;
      margin: 0;
            
      `;

    case "categories":
      return `
      font-size: 14px;
      line-height: 50px;
      font-weight: 400;
      color: #333333;
      margin: 0;
      `;

    case "photos":
      return `font-size: 24px;
      line-height: 36px;
      font-weight: 600;
      color: #ffffff !important;`;

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
  // margin-top: -7px;
  // margin-bottom: 15px;
  line-height: 30px;
  ${(props) => setSizeTitle(props.sizeTitle)};
  ${(props) => setColorTitle(props.colorTitle)};

  ${(props) =>
    props.multicoloredTitle && `color: ${props.multicoloredTitle} !important;`}
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
  max-width: 80ch;

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
  // margin-bottom: 15px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  ${(props) => setColorText(props.colorText)};

  white-space: pre-line;
`;

export const ExtraText = styled.p`
  ${generalStyles}
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  ${(props) => setColorText(props.colorText)};

  white-space: pre-line;
  display: none;
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

    case "bottom":
      return `
                    position: absolute;
                    bottom: 0;
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
  ${(props) => props.setPadding && "padding: 40px;"}
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
        margin-bottom: 15px;
      }
      ${Text} {
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        color: #575757;
        margin-bottom: 15px;
      }

    `;

    case "textList":
      return `
      ${Title} {
        font-size: 36px;
        line-height: 30px;
        font-weight: 300;
        color: #333333;
        margin: 20px 0;
      }
      ${SubTitle} {
        font-size: 18px;
        line-height: 36px;
        font-weight: 300;
        color: #999999;
        margin-bottom: 10px;
      }
      ${Text} {
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        color: #575757;
        // margin-bottom: 15px;
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

    case "numbers":
      return `
      ${Title} {
        font-size: 60px;
        line-height: 60px;
        font-weight: 300;
      }
     
    `;

    case "mainTable":
      return `
      ${Title} {
        font-size: 33px;
        line-height: 30px;
        font-weight: 300;
        color: #333333;
      }

      ${SubTitle} {
        font-size: 20px;
        line-height: 36px;
        font-weight: 300;
      }
     
    `;

    case "table":
      return `
      ${Title} {
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
      }
      `;

    case "footer":
      return `
        ${Title} {
          font-size: 18px;
          line-height: 30px;
          font-weight: 600;
        }  
      `;

    case "postAuthor":
      return `
      ${Title} {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
      }  
      `;

    case "postTitle":
      return `
      ${Title} {font-size: 30px;
      line-height: 50px;
      font-weight: 300;
      color: #333333;
      margin: 20px 0;
      }`;

    case "tweets":
      return `
      ${Title} {font-size: 13px;
        line-height: 30px;
        font-weight: 700;
        letter-spacing: 0.13em;
      }`;

    case "bigSlider":
      return `
      ${Title} {
        font-size: 72px;
        line-height: 60px;
        font-weight: 400;
        letter-spacing: 0.05em;
        color: #ffffff;
        margin-bottom: 15px;
      }

      ${SubTitle} {
        font-size: 36px;
        line-height: 30px;
        font-weight: 300;
        color: #ffffff;

         margin-bottom: 15px;
      }
    `;

    case "basicSlider":
      return `
      ${SubTitle} {
        font-size: 30px;
        line-height: 50px;
        font-weight: 300;
        color: #ffffff;
        margin-bottom: 15px;
      }
      ${Text} {
        color: #ffffff;
      } 
    `;

    case "footerLogo":
      return `
      ${Title} {
        // font-family: FuturaPT;
        font-size: 30px;
        line-height: 30px;
        font-weight: 700;
        text-transform: uppercase;
        color: #ffffff;
        
      }
      ${Text} {
        opacity: 0.5;
        // font-family: CenturyGothic;
        font-size: 11px;
        line-height: 18px;
        font-weight: 400;
        letter-spacing: 0.2em;
        color: #ffffff;
      }
    `;
    case "percentBasic":
      return `
      ${Title} {
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        margin-top: 50px;
        margin-bottom: 15px;
      }

    `;

    default:
      return `
      ${Title} {
        font-size: 36px;
        line-height: 30px;
        font-weight: 300;
        color: #333333;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      ${SubTitle} {
        font-size: 18px;
        line-height: 36px;
        font-weight: 300;
        color: #999999;
        margin-bottom: 87px;
      }

    `;
  }
};
