import React, { Component } from "react";

import { ListItem, ButtonCross } from "./styles";

class ListItemComponent extends Component {
  render() {
    const { task, handleClick } = this.props;
    return (
      <ListItem>
        {task}
        <ButtonCross onClick={handleClick}>x</ButtonCross>
      </ListItem>
    );
  }
}

export default ListItemComponent;
