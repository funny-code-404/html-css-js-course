import React from "react";
import "./styles.css";

import {TextContainer, Title, SubTitle, Text, Line} from './styles'

class BlockText extends React.Component {
  render() {
    const { title, subTitle, text } = this.props.items;
    const { isNotVisibleLine, styleTextContainer} = this.props;

    return (
      <TextContainer className={styleTextContainer}>
          <Title>{title}</Title>
          {!isNotVisibleLine && <Line></Line>}
          <SubTitle>{subTitle}</SubTitle>
          <Text>{text}</Text>
      </TextContainer>

    );
  }
}

export default BlockText;
