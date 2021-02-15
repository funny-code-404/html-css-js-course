import React from "react";

import {
  Title,
  SubTitle,
  Line,
  Text,
  TextContainer,
  ExtraText,
} from "./styles";

class TextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: "false",
    };
  }

  render() {
    const { settings, isLine } = this.props;
    const {
      title,
      subTitle,
      text,
      textList,
      iconTitle,
      extraText,
    } = this.props.items;

    return (
      <TextContainer {...settings}>
        <Title {...settings}>
          {iconTitle && (
            <i className={iconTitle} style={{ color: "#9bcb5b" }}></i>
          )}
          {title}
        </Title>
        {isLine && <Line {...settings}></Line>}

        {subTitle && <SubTitle {...settings}>{subTitle}</SubTitle>}

        {text && <Text {...settings}>{text}</Text>}
        {extraText && <ExtraText {...settings}>{extraText}</ExtraText>}

        {textList &&
          textList.text.map((item) => {
            return (
              <Text {...settings}>
                <i className={textList.icon}></i>
                {`  ${item}`}
              </Text>
            );
          })}
      </TextContainer>
    );
  }
}
export default TextComponent;
