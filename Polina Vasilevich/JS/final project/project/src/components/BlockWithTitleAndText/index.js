import React from "react";
import { TextContainer, Title, SubTitle, Text, Line } from "./styles";

class TitleAndText extends React.Component {
  render() {
    const { title, subTitle, text } = this.props.items;
    return (
      <TextContainer>
        <Title>{title}</Title>
        <Line></Line>
        <SubTitle>{subTitle}</SubTitle>
        <Text>{text}</Text>
      </TextContainer>
    );
  }
}

export default TitleAndText;
