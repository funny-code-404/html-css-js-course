import React from "react";
import PropTypes from "prop-types";

import { BannerComponent, Title, Text } from "./styles";
class Banner extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <BannerComponent>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </BannerComponent>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Banner;
