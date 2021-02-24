import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";
import { Icon } from "../Icon/styles";

class ButtonComponent extends React.Component {
  render() {
    const {
      settings,
      buttonIcon,
      buttonLabel,
      handleButton,
      link,
      id,
      styles,
    } = this.props;

    return (
      <Button
        style={styles}
        {...settings}
        onClick={handleButton}
        value={link}
        id={id}
      >
        {buttonIcon && (
          <Icon className={buttonIcon} fontSizeIcon="button"></Icon>
        )}
        {buttonLabel}
      </Button>
    );
  }
}

ButtonComponent.propTypes = {
  settings: PropTypes.object,
  buttonIcon: PropTypes.string,
  buttonLabel: PropTypes.string,
  handleButton: PropTypes.func,
  id: PropTypes.number,
  styles: PropTypes.object,
};

ButtonComponent.defaultProps = {
  settings: {},
  buttonIcon: "",
  buttonLabel: "",
  id: 0,
  styles: {},
};

export default ButtonComponent;
