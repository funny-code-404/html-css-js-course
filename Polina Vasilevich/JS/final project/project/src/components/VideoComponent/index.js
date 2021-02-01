import React from "react";
import "./styles.css";
class VideoComponent extends React.Component {
  render() {
    return (
      <div class="thumb-wrap">
        {/* <iframe
          src="https://player.vimeo.com/video/159120552?byline=0&portrait=0&badge=0"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe> */}

        <video
          width="480"
          controls
          poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif"
        >
          <source
            src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
            type="video/mp4"
          />
          <source
            src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
            type="video/ogg"
          />
          <source
            src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
            type="video/webm"
          />
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>
    );
  }
}

export default VideoComponent;
