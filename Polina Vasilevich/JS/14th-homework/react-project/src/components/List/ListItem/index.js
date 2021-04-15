import React, { Component } from "react";
import PropTypes from "prop-types";
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

ListItemComponent.propTypes = {
  task: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ListItemComponent;
