import React from "react";
import { Button, Icon } from "./styles";

class ButtonComponent extends React.Component {
  render() {
    const { buttonLabel, buttonIcon } = this.props;
    return (
      <Button>
        <Icon className={buttonIcon}></Icon>
        {buttonLabel}
      </Button>
    );
  }
}

export default ButtonComponent;