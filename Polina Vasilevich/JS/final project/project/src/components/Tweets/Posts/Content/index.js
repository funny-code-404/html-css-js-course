import PropTypes from "prop-types";
import Typography from "../../../Typography";
import { Content, ContentImage } from "./styles";
import Video from "../../../VideoComponent";

ContentComponent.propTypes = {
  content: PropTypes.array,
};

ContentComponent.defaultProps = {
  content: [],
};

export default function ContentComponent(props) {
  const content = props.items;
  return (
    <Content>
      <div style={{ marginBottom: "26px" }}>
        {content.img && <ContentImage backgroundContentImage={content.img} />}
        {content.video && (
          <Video heightVideo="posts" items={{ src: content.video }} />
        )}
      </div>
      {content.title && (
        <Typography
          items={content}
          settings={{
            stylesText: "postsContentText",
          }}
        />
      )}
    </Content>
  );
}
