import PropTypes from "prop-types";
import { Title, Line } from "../../../Typography/styles";

const Article = ({ items, contentContainer }) => (
  <article style={{ marginBottom: "35px" }}>
    <Title sizeTitle="tweets">{items.title}</Title>
    <Line widthLine="small" />
    {contentContainer}
  </article>
);

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

export default Article;
