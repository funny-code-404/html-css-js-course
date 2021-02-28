import styled from "styled-components";

const setHeightVideo = (heightVideo) => {
  switch (heightVideo) {
    case "posts":
      return `
          height: 401px;
    `;

    default:
      return `
          height: 775px;
    `;
  }
};

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;

  ${(props) => setHeightVideo(props.heightVideo)};
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
