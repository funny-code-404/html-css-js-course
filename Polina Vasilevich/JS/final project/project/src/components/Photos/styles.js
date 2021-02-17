import styled from "styled-components";

export const Img = styled.div`
  position: relative;
  height: ${(props) => (props.heightImg ? props.heightImg : "420px")};
  background-size: cover;
  background-position: center center;
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};

  ${(props) =>
    props.gridItemRow &&
    `&:nth-of-type(${props.gridItemRow}) {
    height: ${(props) => (props.heightImg ? props.heightImg : "420px")};
    grid-row: 1 / 3;`}
  }

  ${(props) =>
    props.gridItemColumn &&
    `&:nth-of-type(${props.gridItemColumn}) {
    
    grid-column: 1 / 3;`}
  }

`;
