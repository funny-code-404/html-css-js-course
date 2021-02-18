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
                color: #b9b9b9;
              }
              ${Text} {
                color: #cccccc;
              } 
            `;

    case "green":
      return `background-color:#82b440;
              ${Button} {
                background-color:#82b440;
                border: 1px solid #fff;
              }
      `;
    case "blue":
      return `background-color:#37ceff;
              ${Button} {
                background-color:#37ceff;
                border: 1px solid #fff;
              }
          `;

    case "grey":
      return `background-color:#f6f7f8;
              // ${Title} {
              //   color: #ffffff ;
              // }
              // ${SubTitle} {
              //   color: #b9b9b9;
              // }
              // ${Text} {
              //   color: #cccccc;
              // } 
              // ${Button} {
              //   background-color:#37ceff;
              //   border: 1px solid #fff;
              // }
                `;

    case "footer":
      return `background-color: #242427;`;

    case "copyRight":
      return `background-color:#1A1A1D;`;

    case "logos":
      return `background-color: #373C46;`;

    case "blog":
      return `background-color: #4285F4;
              ${Button} {
                background-color: #4285F4;
                border: 1px solid #fff;
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
    case "callTo":
      return `height: 180px;`;

    case "numbers":
      return `height: 280px;`;

    case "logos":
      return `height: 1277px;`;

    case "tweets":
      return `height: fit-content;`;

    case "slider":
      return `height: 994px;`;

    default:
      return `height: 100%;`;
  }
};

export const MainContainer = styled.div`
  ${(props) => props.isVerticalCenter && `display: flex; align-items: center; `}
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  background-size: cover;
  background-position: center center;

  ${(props) =>
    setBackgroundColorMainContainer(props.backgroundColorMainContainer)}

  ${(props) => setHeightMainContainer(props.heightMainContainer)};
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

export const Wrapper = styled.div`
  ${(props) => setPaddingLeftRight(props.paddingLeftRight)};
  ${(props) => props.deletePadding && ``}
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "88px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "105px"};

  ${(props) => props.deletePadding && `padding 0 !important;`}
`;
