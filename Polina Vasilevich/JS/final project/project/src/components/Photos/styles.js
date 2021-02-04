import styled from "styled-components";

export const Img = styled.div`
  height: ${(props) => (props.heightImg ? props.heightImg : "420px")};
  background-size: cover;
  background-position: center center;
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};

  ${(props) =>
    props.gridItemRow &&
    `&:nth-of-type(${props.gridItemRow}) {
    height: 100%;
    grid-row: 1 / 3;`}
  }

  ${(props) =>
    props.gridItemColumn &&
    `&:nth-of-type(${props.gridItemColumn}) {
    // height: 100%;
    grid-column: 1 / 3;`}
  }

`;
