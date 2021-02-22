import styled from "styled-components";

export const GridItem = styled.div``;

export const GridTwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.sizeContainers ? props.sizeContainers : ""};
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "0")};

  @media (max-width: 1100px) {
    grid-template-columns: 100%;
  }

  ${GridItem}:nth-of-type(${(props) =>
    props.numberInVisibleBlock && props.numberInVisibleBlock}) {
    @media (max-width: 1100px) {
      display: none;
    }
  }
`;
