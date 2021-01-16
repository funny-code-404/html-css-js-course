import React from "react";
import PropTypes from "prop-types";

import { Article } from "./styles";

class ArticleComponet extends React.Component {
  render() {
    const { title, text } = this.props;

    return (
      <Article>
        <h3 className="article__title">{title}</h3>
        <p className="article__text">{text}</p>
      </Article>
    );
  }
}

ArticleComponet.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
export default ArticleComponet;
