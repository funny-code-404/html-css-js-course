import React from "react";
import { IconContainer, Icon } from "./styles";

class IconComponent extends React.Component {
  render() {
    const {
      formIcons,
      gradientColorFormIcon,
      fontSizeIcon,
      colorIcon,
    } = this.props;
    const { img, icon, backgroundColor } = this.props.items;

    return (
      <IconContainer
        backgroundColor={backgroundColor}
        formIcons={formIcons}
        gradientColorFormIcon={gradientColorFormIcon}
        fontSize={fontSizeIcon}
      >
        {img ? (
          <img src={img} alt={img} style={{ height: "6vh" }} />
        ) : (
          <Icon
            className={icon}
            fontSizeIcon={fontSizeIcon}
            colorIcon={colorIcon}
          ></Icon>
        )}
      </IconContainer>
    );
  }
}

export default IconComponent;
