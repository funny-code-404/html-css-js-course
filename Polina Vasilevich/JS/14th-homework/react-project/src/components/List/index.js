import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

import { List } from "./styles";

class ListComponent extends React.Component {
  render() {
    const { children } = this.props;
    return <List>{children}</List>;
  }
}

ListComponent.Item = ListItem;

ListComponent.propTypes = {
  children: PropTypes.array,
};

export default ListComponent;
