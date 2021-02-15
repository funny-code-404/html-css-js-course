import React from "react";
import { IconContainer, Icon, ContentContainer, Img } from "./styles";
import Typography from "../Typography";
import { Text } from "../Typography/styles";
import { GridContainer } from "../../mainStyles";
import Button from "../Button";

class IconComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      id: -1,
      items: [],
    };
  }

  handleShowText(e) {
    e.preventDefault();
    const { items } = this.state;
    if (!items.includes(+e.target.id)) {
      items.push(+e.target.id);
      this.setState({
        id: e.target.id,
        items: items,
      });
    }
  }

  render() {
    const { settings, items } = this.props;

    return (
      <GridContainer {...settings}>
        {items.map((item, index) => {
          return (
            <ContentContainer key={index} {...settings}>
              <IconContainer
                {...settings}
                multicoloredIcon={item.backgroundColor}
              >
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
              {this.state.items.includes(index) && (
                <Text>{item.extraText}</Text>
              )}
              {console.log(this.state.items)}
              {console.log(index)}
              {item.buttonLabel && (
                <Button
                  id={index}
                  items={item}
                  buttonLabel={item.buttonLabel}
                  buttonIcon={item.buttonIcon}
                  settings={settings}
                  handleButton={this.handleShowText.bind(this)}
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
