import styled from "styled-components";

const setInVisibleBlock = (numberInVisibleBlock) => {
  return `&:nth-of-type(1) {
            @media(max-width: 900px) {
              display: none;
            }
        }`;
};

export const GridItem = styled.div`
  ${(props) => setInVisibleBlock(props.numberInVisibleBlock)};
`;

export const GridTwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.sizeContainers ? props.sizeContainers : ""};
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "0")};
`;
