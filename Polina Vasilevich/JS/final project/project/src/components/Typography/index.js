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
  render() {
    const { settings } = this.props;

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
        {title && (
          <Title {...settings}>
            {iconTitle && (
              <i className={iconTitle} style={{ color: "#9bcb5b" }}></i>
            )}
            {title}
          </Title>
        )}
        {this.props.isLine && <Line {...settings}></Line>}

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
