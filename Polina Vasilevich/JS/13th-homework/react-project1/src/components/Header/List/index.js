import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

import { Ul } from "./styles";

class List extends React.Component {
  render() {
    const { children } = this.props;
    return <Ul>{children}</Ul>;
  }
}

List.Item = ListItem;

// List.PropTypes = {
//   navItems: PropTypes.arrayOf(PropTypes.string),
// };

export default List;
