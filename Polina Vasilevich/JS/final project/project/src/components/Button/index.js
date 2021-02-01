import React from "react";
import { Button, Icon } from "./styles";

class ButtonComponent extends React.Component {
  render() {
    const { buttonLabel, buttonIcon, backgroundColor, borderColor, width, colorText } = this.props;
    console.log(this, backgroundColor)
    return (
      <Button backgroundColor={backgroundColor} borderColor={borderColor} widthButton={width} colorText={colorText}>
        <Icon className={buttonIcon}></Icon>
        {buttonLabel}
      </Button>
    );
  }
}

export default ButtonComponent;
