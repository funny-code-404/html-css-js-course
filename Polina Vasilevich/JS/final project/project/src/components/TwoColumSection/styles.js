import styled from "styled-components";

export const GridTwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.sizeContainers ? props.sizeContainers : ""};
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "0")};
`;

export const Wrapper = styled.div`
  padding: 5%;
`;
