import styled from "styled-components";

export const IconsContainer = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  column-gap: 2%;
  justify-content: space-between;

  grid-template-columns: repeat(8, 1fr);
  column-gap: 1%;
`;
