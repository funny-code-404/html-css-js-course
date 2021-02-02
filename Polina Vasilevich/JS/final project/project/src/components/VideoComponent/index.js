import React from "react";
import "./styles.css";

class VideoComponent extends React.Component {
  render() {
    const {poster, src} = this.props.items;
    return (
      <video 
        controls
        poster={poster}
        preload="none">
          <source 
                  src='src'
                  type="video/mp4"/>
      </video>
    );
  }
}

export default VideoComponent;
