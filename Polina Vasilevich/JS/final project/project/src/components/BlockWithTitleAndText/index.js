import React from "react";
import { TextContainer, Title, SubTitle, Text, Line } from "./styles";

class TitleAndText extends React.Component {
  render() {
    const { title, subTitle, text } = this.props.items;
    const { width, position } = this.props;
    return (
      <TextContainer width={width} position={position}>
        <Title>{title}</Title>
        <Line></Line>
        <SubTitle>{subTitle}</SubTitle>
        <Text>{text}</Text>
      </TextContainer>
    );
  }
}

export default TitleAndText;
