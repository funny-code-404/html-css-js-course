import React from "react";
import { VideoContainer, Video } from "./styles";

class VideoComponent extends React.Component {
  render() {
    const { src } = this.props.items;
    return (
      <VideoContainer>
        <Video src={src} frameborder="0" allowfullscreen></Video>
      </VideoContainer>
    );
  }
}

export default VideoComponent;
