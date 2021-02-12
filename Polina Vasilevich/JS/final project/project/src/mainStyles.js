import styled from "styled-components";

const widthItemGridContainer = (props) =>
  props.widthItemGridContainer ? props.widthItemGridContainer : "200px";

export const GridContainer = styled.div`
  display: grid;
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "15px")};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${widthItemGridContainer}, 1fr)
  );
  justify-content: space-between;
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

export const FlexContainer = styled.div`
  // height: ${(props) => (props.height ? props.height : "181px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
