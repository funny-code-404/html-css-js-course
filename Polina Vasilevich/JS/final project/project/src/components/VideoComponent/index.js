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

export default function VideoComponent(props) {
  const { src } = props.items;
  return (
    <VideoContainer heightVideo={props.heightVideo}>
      <Video src={src} frameborder="0" allowfullscreen></Video>
    </VideoContainer>
  );
}
