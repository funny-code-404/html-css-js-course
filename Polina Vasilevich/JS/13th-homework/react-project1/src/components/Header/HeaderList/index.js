import React, { Component } from "react";
import PropsType from "prop-types";

import { List, ListItem } from "./styles";

class HeaderList extends Component {
  render() {
    const { headers } = this.props;
    return (
      <List>
        {headers.map((header) => (
          <ListItem key={header}>{header}</ListItem>
        ))}
      </List>
    );
  }
}

HeaderList.propsType = {
  headers: PropsType.arrayOf(PropsType.string),
};

export default HeaderList;
