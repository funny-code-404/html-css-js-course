import PropTypes from "prop-types";
import { Title, Line } from "../../../Typography/styles";

Article.propTypes = {
  items: PropTypes.array,
  contentContainer: PropTypes.array,
};

Article.defaultProps = {
  items: {
    title: "",
  },
  contentContainer: [],
};

export default function Article(props) {
  const { items, contentContainer } = props;

  return (
    <article style={{ marginBottom: "35px" }}>
      <Title sizeTitle="tweets">{items.title}</Title>
      <Line widthLine="small" />
      {contentContainer}
    </article>
  );
}
