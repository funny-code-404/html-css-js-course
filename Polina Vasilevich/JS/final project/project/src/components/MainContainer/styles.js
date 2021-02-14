import styled from "styled-components";

const setBackgroundColorMainContainer = (backgroundColorMainContainer) => {
  switch (backgroundColorMainContainer) {
    case "dark":
      return `background-color: #1F252F;`;
    case "green":
      return `background-color:#82b440;`;
    case "blue":
      return `background-color:#37ceff;`;

    case "copyRight":
      return `background-color:#1A1A1D;`;
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

    default:
      return `height: fit-content;`;
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
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "100px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "100px"};

  ${(props) => props.deletePadding && `padding 0 !important;`}
`;
