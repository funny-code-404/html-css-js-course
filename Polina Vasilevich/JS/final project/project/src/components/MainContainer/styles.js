import styled from "styled-components";
import { Title, SubTitle, Text } from "../Typography/styles";
import { Button } from "../Button/styles";
const setBackgroundColorMainContainer = (backgroundColorMainContainer) => {
  switch (backgroundColorMainContainer) {
    case "dark":
      return `
              background-color: #1F252F;
              ${Title} {
                color: #ffffff ;
              }
              ${SubTitle} {
                color: #b9b9b9 !important;
              }
              ${Text} {
                color: #cccccc !important;
              } 
            `;

    case "callToGreen":
      return `background-color:#82b440;
              ${Button} {
                background-color:#82b440 !important;
                border: 1px solid #fff;
                :hover {
                  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.07);
                  
                  color: #000 !important;
                  border-color: #000;
               }
              }
      `;
    case "callToBlue":
      return `background-color:#37ceff;
              ${Button} {
                background-color:#37ceff;
                border: 1px solid #fff;
                :hover {
                  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.07);
                  color: #000 !important;
                  border-color: #000;
               }
              }
          `;

    case "callToLightBlue":
      return `background-color:#49b0f1;
              ${Button} {
                background-color:#49b0f1;
                border: 1px solid #fff;

                :hover {
                  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.07);
                  color: #000 !important;
                  border-color: #000;
               }
              }
          `;

    case "progressBarLight":
      return `background-color:#f6f7f8;

                `;

    case "footer":
      return `background-color: #242427;`;

    case "copyRight":
      return `background-color:#1A1A1D;`;

    case "logos":
      return `background-color: #373c46;`;

    case "blog":
      return `background-color: #4285F4;
              ${Button} {
                background-color: #4285F4;
                border: 1px solid #fff;

                :hover {
                  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.07);
                  color: #000 !important;
                  border-color: #000;
               }
              }
          `;
    case "aside":
      return `
      background-color: #e3e3e3;
      `;

    case "header":
      return `
      background-color: #f7f7f7;
      `;
    case "featuresForm":
      return `
        background-color: #212121;
        ${Title} {
          color: #ffffff ;
        }
          `;

    default:
      break;
  }
};

const setHeightMainContainer = (heightMainContainer) => {
  switch (heightMainContainer) {
    case "header":
      return `height: 92px;`;
    case "intro":
      return `height: 777px;`;
    case "homeIntro2":
      return `height: 760px;`;
    case "callTo":
      return `height: 180px;`;

    case "numbers":
      return `height: 280px;`;

    case "logos":
      return `height: 1277px;`;

    case "tweets":
      return `height: fit-content;`;

    case "slider1":
      return `height: 994px;`;

    case "slider2":
      return `height: 800px;`;

    case "footer":
      return `height: 100%;`;
    case "work":
      return `height: 701px;`;

    default:
      return `height: 100%`;
  }
};

const setMediaBlock = (mediaBlock) => {
  switch (mediaBlock) {
    case "numbers":
      return `@media(max-width: 900px) {
        display:none;
      }`;

    case "aside":
      return `@media(max-width: 900px) {
          display:none;
        }`;

    case "posts":
      return `@media(max-width: 900px) {
        padding-top: 50px;
        padding-left: 11%;
        padding-right: 11%;
            }`;

    default:
      break;
  }
};

const setpositionContentBlock = (positionContentBlock) => {
  switch (positionContentBlock) {
    case "right":
      return `justify-content: flex-end;`;

    default:
      break;
  }
};
export const MainContainer = styled.div`
  position: relative;
  ${(props) => props.isVerticalCenter && `display: flex; align-items: center; `}
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  background-size: cover;
  background-position: center center;

  ${(props) =>
    setBackgroundColorMainContainer(props.backgroundColorMainContainer)};

  ${(props) => setHeightMainContainer(props.heightMainContainer)};
  ${(props) => setMediaBlock(props.mediaBlock)};
  transition: transform 0.2s ease-in-out;
  ${(props) => setpositionContentBlock(props.positionContentBlock)};
`;

const setPaddingLeftRight = (paddingLeftRight) => {
  switch (paddingLeftRight) {
    case "small":
      return `
                padding-right: 10%;
                padding-left: 10%;
            `;
    case "none":
      return `
                padding-right: 0;
                padding-left: 0;
                `;

    case "deletePadding":
      return `
                padding:0;
                `;

    case "iconsList":
      return `
        padding-top: 88px;
        padding-bottom: 105px;
      `;
    default:
      return `
            padding-right: 19%;
            padding-left: 19%;
            
           `;
  }
};

const setStylesBlock = (stylesBlock) => {
  switch (stylesBlock) {
    case "withoutPadding":
      return `
        padding: 0;
      `;

    case "withoutPaddingLeftRight":
      return ` 
        padding-left:0;
        padding-right:0;
      `;
    case "posts":
      return ` 
        padding-top: 105px;
        padding-left:36%;
        padding-right:0;
      `;

    case "aside":
      return `
        padding-top: 33px;
        padding-bottom: 105px;
        padding-left: 0;
        padding-right: 47%;


      `;

    case "asideIconsList":
      return `
    
        padding-left:0;
        padding-right:0;
        padding-top:0 !important;
        padding-bottom:0 !important;
      `;

    case "photos":
      return `
      
          padding-left:0;
          padding-right:0;
          padding-top:0;
          padding-bottom:0;
        }`;

    case "callTo":
      return `
          padding-top:0;
          padding-bottom:0;
        `;

    case "iconsList2":
      return `
            paddingTop: "94px",
            paddingBottom: "82px",
        `;

    case "twoColumns":
      return `
              padding-right: 10%;
              padding-left: 10%;
            `;

    case "demosLogosList":
      return `padding-top: 60px;
              padding-bottom: 0;
              padding-right: 2%;
              padding-left: 2%;`;

    case "numbers":
      return `
      padding-right: 5%;
      padding-left: 5%;
      padding-top: 0;
      padding-bottom: 0;
            `;

    case "homePhotos":
      return `
                      padding-right: 0;
                      padding-left: 0;
                      padding-top:89px;
                      padding-bottom:0;
                    `;

    case "featuresIconsListBlock":
      return `
      padding-top: 83px;
      padding-bottom: 71px;
      padding-right: 0;
      padding-left: 0;
            `;

    case "featuresIconsList":
      return `
              padding-top: 60px;
              padding-bottom: 71px;
                    `;

    case "homeIconsList2":
      return `
              padding-top: 82px;
              padding-bottom: 105px;
              padding-right: 6%;
              padding-left: 6%;
                    `;

    case "shopPortfolio":
      return `padding-top: 0;
              padding-bottom: 55px;

                    `;

    default:
      return `
           
           `;
  }
};

export const Wrapper = styled.div`
  ${(props) => setPaddingLeftRight(props.paddingLeftRight)};

  ${(props) => props.deletePadding && ``}
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "88px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "105px"};

  ${(props) => props.deletePadding && `padding 0 !important;`}

  ${(props) => setStylesBlock(props.stylesBlock)};

  ${(props) =>
    props.oneStringLogosList &&
    `    height: 180px;
         display: flex;
         align-items: center;
         padding: 0 5%;`};

  ${(props) => setMediaBlock(props.mediaBlock)};
`;
