import React from "react";

import { GridContainer, Wrapper } from "../../mainStyles";
// import Imgs from "../BlockImg";
import Icon from "../Icon";

import { TextContainer, Title, Text } from "./styles";

class Portfolio extends React.Component {
  render() {
    const { imgs, title, text, icons } = this.props.items;
    return (
      <Wrapper>
        {/* <Imgs items={imgs} /> */}
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
        <GridContainer widthItemGridContainer="100px">
          {icons.map((icon) => {
            return (
              <Icon items={icon} formIcons="rectangle" fontSizeIcon="14px" />
            );
          })}
        </GridContainer>
      </Wrapper>
    );
  }
}
export default Portfolio;
