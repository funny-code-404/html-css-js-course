import styled from "styled-components";

export const IconsContainer = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   margin-bottom: 12px;
  cursor: pointer;

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
`;
