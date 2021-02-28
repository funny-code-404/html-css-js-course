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

    case "asideCategories":
      return `
      font-size: 14px;
      line-height: 50px;
      font-weight: 400;
      color: #333333;
      margin: 0;
       :hover {
          color: #4285f4;
       }
      `;

    case "photos":
      return `font-size: 24px;
      line-height: 36px;
      font-weight: 600;
      color: #ffffff !important;`;

    default:
      return ``;
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
  font-size: 36px;

  font-weight: 300;
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
                align-items: flex-end;
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
                align-items: center;
                `;
  }
};

const setMediaText = (mediaText) => {
  switch (mediaText) {
    case "copyRight":
      return `
            @media (max-width: 1369px) {
              width: 49ch;
            }
            `;
    case "intro": {
      return `
      @media (max-width: 868px) {
        width: 100%;
        text-align: center;
        align-items: center;
        
      }
      `;
    }
    default:
      return `
                `;
  }
};

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => setPositionText(props.positionText)};
  ${(props) => setStylesText(props.stylesText)};
  ${(props) => props.setPadding && "padding: 40px;"};
  ${(props) => setMediaText(props.mediaText)};
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
      // text-align: left;
      // align-items: start;
      ${Title} {
        font-size: 36px;
        line-height: 35px;
        font-weight: 400;
        color: #333333;
        margin: 20px 0;
      }
      ${SubTitle} {
        font-size: 18px;
        line-height: 36px;
      
        color: #999999;
        margin-bottom: 10px;
      }
      ${Text} {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 30px;
      
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
      ${Line} {
        width: 30px;
        
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
        text-align: left;
        align-items: start;
        ${Title} {
          font-size: 18px;
          line-height: 30px;
          font-weight: 600;
          color: #cccccc;
        }  
      `;

    ///posts
    case "postAuthor":
      return `
      text-align: left;
      align-items: start;
      ${Title} {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
      }  
      `;

    case "postsContentText":
      return `
      text-align: left;
      ${Title} {
        margin-bottom: 10px;
        font-size: 30px;
        line-height: 50px;
        font-weight: 300;
        color: #333333;
       }  
      `;

    case "tweets":
      return `
      ${Title} {font-size: 13px;
        line-height: 30px;
        font-weight: 700;
        letter-spacing: 0.13em;
      }`;

    case "asidePostsTitle":
      return `
      text-align: left;
      align-items: start;
      width: 56%;
      margin-top: -9px;
      ${Title} {
        font-size: 14px;
        line-height: 30px;
        font-weight: 600;
        color: #333333;
        
        :hover {
          cursor: pointer;
          color: #4285f4;
        }
      }`;

    case "asideCategories":
      return `
          ${Title} {
            font-size: 14px;
            line-height: 50px;
            font-weight: 400;
            color: #333333;
            margin: 0;
          }
          :hover {
          color: #4285f4;
        }

      `;

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
      text-align: left;
      align-items: start;
      ${Title} {
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        margin-bottom: 10px;
      }
    `;

    case "progressBarSkills":
      return `
      text-align: left;
      align-items: start;
    `;

    case "work":
      return `
      ${Title} {
        color: #fff;
      }
    `;

    case "photos":
      return `
        text-align: left;
        align-items: start;
        position: absolute;
        bottom: 0;
      ${Title} {
        font-size: 24px;
        line-height: 36px;
        font-weight: 600;
        color: #ffffff !important;
      }
    `;

    case "potrfolio":
      return `
      text-align: left;
      align-items: start;
      font-size: 18px;
      font-weight: 300;
      margin: 0;
      ${SubTitle} {
        color: #333333 !important;
        font-weight: 600;
      }
      `;

    default:
      return `
      ${Title} {
        font-size: 36px;
        line-height: 35px;
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
