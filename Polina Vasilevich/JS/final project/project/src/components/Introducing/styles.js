import styled, { css } from "styled-components";

const positionBlockRight = css`
  margin-left: auto;
`;

export const ContentContainer = styled.div`
  width: 46%;

  ${(props) => (props.positionBlockRight ? positionBlockRight : "")};
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 778px;
  background-size: cover;
  background-position: center center;
`;
