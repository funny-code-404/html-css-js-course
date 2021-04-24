import styled from "styled-components";
import { TextContainer, Text } from "./components/Typography/styles";

export const GridItem = styled.div``;
const widthItemGridContainer = (props) =>
  props.widthItemGridContainer ? props.widthItemGridContainer : "200px";

const setMediaWidthItemGridBlock = (breakpoint, mediaWidthItemGridBlock) => {
  return `@media(max-width: ${breakpoint}) {
              grid-template-columns: repeat(
              auto-fit,
              minmax(${mediaWidthItemGridBlock}, 1fr));`;
};

const setMediaGridBlock = (mediaGridBlock) => {
  switch (mediaGridBlock) {
    case "iconsList1":
      return setMediaWidthItemGridBlock("1418px", "280px");

    case "photos1":
      return setMediaWidthItemGridBlock("1560px", "560px");

    case "footer":
      return `
        ${GridItem}:nth-of-type(1) {
          @media(max-width: 1418px) {
            grid-column: 1/5;
          }
        }    
    `;

    default:
      break;
  }
};

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: ${(props) => (props.gridGap ? props.gridGap : "15px")};
  grid-row-gap: ${(props) => (props.gridRowGap ? props.gridRowGap : "25px")};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${widthItemGridContainer}, 1fr)
  );
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  ${(props) => setMediaGridBlock(props.mediaGridBlock)}
`;

const paddingTopBottom = (props) =>
  props.paddingTopBottom ? props.paddingTopBottom : "100px";

const paddingLeftRight = (props) =>
  props.paddingLeftRight ? props.paddingLeftRight : "19%";

export const Wrapper = styled.div`
  padding: ${paddingTopBottom} ${paddingLeftRight};
`;

const setPositionContentContainer = (positionTextContainer) => {
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

const setPositionContent = (positionContent) => {
  switch (positionContent) {
    case "right":
      return `
                text-align: right;
                align-items: flex-end;
                  
                }
            `;
    case "center":
      return `
                text-align: center;
                align-items: center;
        `;
    default:
      return ` text-align: left;
      
        
      }
              `;
  }
};

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.widthContentContainer ? props.widthContentContainer : "100%"};
  ${(props) => setPositionContentContainer(props.positionContentContainer)};
  ${(props) => setPositionContent(props.positionContent)};

  @media (max-width: 868px) {
    width: 100%;
    text-align: center;
    align-items: center;
  ${TextContainer} {
    text-align: center;
    align-items: center;
  }
`;

const setHeightFlexContainer = (heightFlexContainer) => {
  switch (heightFlexContainer) {
    case "header":
      return `height: 92px;`;
    case "callTo":
      return `height: 180px;`;

    case "numbers":
      return `height: 280px;`;
    case "footer":
      return `height: 385px;`;

    case "work":
      return `height: 701px;`;

    default:
      return `height: fit-content;`;
  }
};

const setMediaFlexBlock = (mediaFlexBlock) => {
  switch (mediaFlexBlock) {
    case "callTo":
      return `@media(max-width: 1100px) {
        text-align: center;
        flex-direction: column;
        justify-content: center;
      }`;

    case "numbers":
      return `@media(max-width: 1000px) {
        display: none;
      }`;

    case "footer":
      return `@media(max-width: 1440px) {
          ${Text} {
            text-align: center; 
            width: 49ch;
          }
        }
        @media (max-width: 956px) {
          padding: 20px 0;
          flex-direction: column;
          align-items: center;
        }
        `;

    case "footerIconsContainer":
      return `
        @media (max-width: 956px) {
          height: 600px;
        }
        `;

    case "header":
      return `
        @media (max-width: 1345px) {
          justify-content: center;
        }
        `;

    default:
      break;
  }
};

export const FlexContainer = styled.div`
  ${(props) => setHeightFlexContainer(props.heightFlexContainer)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => setMediaFlexBlock(props.mediaFlexBlock)};
`;

export const Arrow = styled.button`
  position: fixed;
  right: 20px;
  bottom: 30px;
  z-index: 999999;

  width: 40px;
  height: 50px;

  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 25px;

  transition: 0.6s ease;
  outline: none;

  opacity: 0.3;
  background-color: #000;
  border-color: transparent;
  border-radius: 3px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
    opacity: 0.5;
  }
`;
