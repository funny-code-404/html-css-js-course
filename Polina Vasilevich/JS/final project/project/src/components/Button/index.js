import React from "react";
import { Button } from "./styles";

import { Icon } from "../Icon copy/styles";
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
      className,
    } = this.props;

    return (
      <Button
        style={styles}
        {...settings}
        // onClick={setHandleButton(handleButton)}
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

export default ButtonComponent;
