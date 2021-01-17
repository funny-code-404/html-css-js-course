import React from "react";
import PropTypes from "prop-types";

import { Article, Title, Text, Button, DateText } from "./styles";

class ArticleComponet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { title, text, date } = this.props;

    return (
      <Article>
        <Title>{title}</Title>
        {this.state.visible ? (
          <Text style={{ whiteSpace: "normal" }}>{text}</Text>
        ) : (
          <Text>{text}</Text>
        )}
        <Button onClick={this.handleClick}>
          {this.state.visible ? "Read less" : "Read more"}
        </Button>
        <DateText>Publication date: {new Date(date).toDateString()}</DateText>
      </Article>
    );
  }
}

ArticleComponet.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
export default ArticleComponet;
