import React from "react";
import PropTypes from "prop-types";

import { Li } from "./styles";

class ListItem extends React.Component {
  render() {
    const { text } = this.props;
    return <Li>{text}</Li>;
  }
}

ListItem.propTypes = {
  text: PropTypes.string,
};

export default ListItem;
