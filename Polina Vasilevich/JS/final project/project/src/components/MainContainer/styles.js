import styled from "styled-components";

export const MainContainer = styled.div`
  ${props => props.isVerticalCenter && `display: flex; align-items: center;`}
  height: ${(props) =>
    props.heightMainContainer
      ? props.heightMainContainer
      : "100%"};
  background-color: ${(props) =>
    props.backgroundColorMainContainer
      ? props.backgroundColorMainContainer
      : ""};

  background-image: ${(props) =>
                      props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  background-size: cover;
  background-position: center center;
`;

const setPaddingLeftRight = (paddingLeftRight) => {
  switch (paddingLeftRight) {
    case "small":
      return `
                padding-right: 5%;
                padding-left: 5%;
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
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "100px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "100px"};
`;
