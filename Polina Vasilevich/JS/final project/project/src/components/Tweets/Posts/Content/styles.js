import styled from "styled-components";

const setBackgroundContentImage = (props) =>
  props.backgroundContentImage
    ? `background: url(${props.backgroundContentImage}) center center`
    : "";

export const ContentImage = styled.div`
  width: 100%;
  height: 401px;
  ${setBackgroundContentImage};
  background-size: cover;
`;

export const Content = styled.div``;
