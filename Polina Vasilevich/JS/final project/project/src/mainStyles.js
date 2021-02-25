import styled from "styled-components";

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

  justify-content: space-between;
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
            `;
    case "center":
      return `
                text-align: center;
        `;
    default:
      return ` text-align: left;`;
  }
};

export const ContentContainer = styled.div`
  width: ${(props) =>
    props.widthContentContainer ? props.widthContentContainer : "100%"};
  ${(props) => setPositionContentContainer(props.positionContentContainer)};
  ${(props) => setPositionContent(props.positionContent)};
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
      return `@media(max-width: 1418px) {
        text-align: center;
        flex-direction: column;
        justify-content: center;
      }`;

    case "numbers":
      return `@media(max-width: 1000px) {
        display:none;
      }`;

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
