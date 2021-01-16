import React from "react";
import Article from "../Article";

import { Section, Title, Text, ArticleContainer } from "./styles";

class SectionComponent extends React.Component {
  renderArticle() {
    const { articleItems } = this.props;

    return articleItems.map(({ title, text }, index) => {
      return <Article key={index} title={title} text={text} />;
    });
  }

  render() {
    const { title, text } = this.props;
    return (
      <Section>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <ArticleContainer>{this.renderArticle()}</ArticleContainer>
      </Section>
    );
  }
}

export default SectionComponent;
