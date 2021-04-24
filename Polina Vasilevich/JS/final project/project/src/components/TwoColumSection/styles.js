import styled from "styled-components";

export const GridItem = styled.div``;

export const GridTwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.sizeContainers ? props.sizeContainers : ""};
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "0")};

  @media (max-width: 1350px) {
    grid-template-columns: 1fr;

    ${GridItem}:nth-of-type(${(props) =>
  props.numberInVisibleBlock && props.numberInVisibleBlock}) {
      
        display: none;
      }
  } 

  
    
  }
`;
