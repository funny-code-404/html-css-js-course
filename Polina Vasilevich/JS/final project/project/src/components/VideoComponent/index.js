import PropTypes from "prop-types";
import { VideoContainer, Video } from "./styles";

VideoComponent.propTypes = {
  items: PropTypes.object,
  heightVideo: PropTypes.string,
};

VideoComponent.defaultProps = {
  items: "https://www.youtube.com/embed/tgbNymZ7vqY",
  heightVideo: "",
};

export default function VideoComponent({ items, heightVideo }) {
  return (
    <VideoContainer heightVideo={heightVideo}>
      <Video src={items.src} frameborder="0" allowfullscreen></Video>
    </VideoContainer>
  );
}
