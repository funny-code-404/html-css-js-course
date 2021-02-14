import React from "react";
import { IconContainer, Icon, ContentContainer, Img } from "./styles";
import Typography from "../Typography";
import { GridContainer } from "../../mainStyles";
import Button from "../Button";

class IconComponent extends React.Component {
  render() {
    const { settings, items } = this.props;

    return (
      <GridContainer {...settings}>
        {items.map((item, index) => {
          return (
            <ContentContainer key={index} {...settings}>
              <IconContainer key={item.title} {...settings}>
                {item.img ? (
                  <Img {...settings} backgroundImg={item.img} />
                ) : (
                  <Icon {...settings} className={item.icon}></Icon>
                )}
              </IconContainer>

              {item.title && (
                <Typography
                  items={item}
                  key={item.title}
                  settings={{
                    stylesText: "icons",
                    ...settings,
                  }}
                />
              )}
              {item.buttonLabel && (
                <Button
                  items={item}
                  buttonLabel={item.buttonLabel}
                  buttonIcon={item.buttonIcon}
                  settings={settings}
                />
              )}
            </ContentContainer>
          );
        })}
      </GridContainer>
    );
  }
}

export default IconComponent;
