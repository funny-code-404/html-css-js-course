import React from "react";
import ListItem from "./ListItem";

import { List } from "./styles";

class ListComponent extends React.Component {
  render() {
    const { children } = this.props;
    return <List>{children}</List>;
  }
}

ListComponent.Item = ListItem;

export default ListComponent;
