import React from "react";
import { Button, Icon } from "./styles";

class ButtonComponent extends React.Component {
  render() {
    const {
      buttonLabel,
      buttonIcon,
      backgroundColor,
      borderColor,
      width,
      colorText,
    } = this.props;

    const settings = this.props;
    

    return (
      <Button
        backgroundColor={settings.backgroundColor}
        borderColor={settings.borderColor}
        widthButton={settings.widthButton}
        colorText={settings.colorText}
      >
        {settings.buttonIcon && <Icon className={settings.buttonIcon}></Icon>}
        {settings.buttonLabel}
        
      </Button>
    );
  }
}

export default ButtonComponent;
