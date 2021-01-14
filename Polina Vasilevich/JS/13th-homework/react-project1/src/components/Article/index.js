import React from "react";
import "./styles.css";

class Article extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <article className="article">
        <h3 className="article__title">{title}</h3>
        <p className="article__text">{text}</p>
      </article>
    );
  }
}

export default Article;
