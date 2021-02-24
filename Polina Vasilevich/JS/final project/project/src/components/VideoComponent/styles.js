import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 775px;
`;

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 0;
  outline-width: 0;
`;
