import styled from "styled-components";

export const Img = styled.div`
  position: relative;
  height: ${(props) => (props.heightImg ? props.heightImg : "420px")};
  width: ${(props) => (props.widthImg ? props.widthImg : "")};
  background-size: cover;
  background-position: center center;
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};

  ${(props) =>
    props.gridItemRow &&
    `&:nth-of-type(${props.gridItemRow}) {
    height: 100%;
    grid-row: 1 / 3;
     @media(max-width: 1418px) {
            height: 420px;
          }
    `}
  }

  ${(props) =>
    props.gridItemColumn &&
    `&:nth-of-type(${props.gridItemColumn}) {
    
    grid-column: 1 / 3;
      @media(max-width: 1320px) {
        grid-column: auto;
      }
    
    `}



`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #000000;
`;

export const Wrapper = styled.div`
  width: 10%;
  margin-right: 3%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
`;

export const Container = styled.div`
  ${(props) =>
    props.containerImgsColor && `background-color: ${props.containerImgsColor}`}
`;
