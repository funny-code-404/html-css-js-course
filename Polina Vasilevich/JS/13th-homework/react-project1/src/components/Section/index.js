import React from "react";
import Article from "../Article";

import "./styles.css";

class Section extends React.Component {

  renderArticle() {
    const {articleItems} = this.props;

    return (articleItems.map(({ title, text, color }, index) => {
      return <Article key={index} title={title} text={text} color={color}/>;
    }));
  
  }

  render() {
    const { title, text } = this.props;
    return (
      <section className="section">
        <h2 className="section__title">{title}</h2>
        <p className="section__text">{text}</p>
        <div className="article-container">{this.renderArticle()}</div>
      </section>
    );
  }
}

export default Section;
