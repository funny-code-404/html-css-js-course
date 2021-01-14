import React from "react";
import Article from "../Article";

import "./styles.css";

class Section extends React.Component {
  render() {
    const { title, text, articleItems } = this.props;
    return (
      <section className="section">
        <h2 className="section__title">{title}</h2>
        <p className="section__text">{text}</p>
        <div className="article-container">
          {articleItems.map(({ title, text }, index) => {
            return <Article key={index} title={title} text={text} />;
          })}
        </div>
      </section>
    );
  }
}

export default Section;
