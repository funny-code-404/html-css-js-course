import React from "react";
import { Button, Icon } from "./styles";

class ButtonComponent extends React.Component {
  render() {
    const { settings, buttonIcon, buttonLabel } = this.props;

    return (
      <Button {...settings}>
        {buttonIcon && <Icon className={buttonIcon}></Icon>}
        {buttonLabel}
      </Button>
    );
  }
}

export default ButtonComponent;
