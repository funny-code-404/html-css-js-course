import React from "react";
import { Button, Icon } from "./styles";

class ButtonComponent extends React.Component {
  render() {
    const { buttonLabel, buttonIcon, backgroundColor, borderColor } = this.props;
    return (
      <Button backgroundColor={backgroundColor} borderColor={borderColor}>
        <Icon className={buttonIcon}></Icon>
        {buttonLabel}
      </Button>
    );
  }
}

export default ButtonComponent;
