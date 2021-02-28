import React from "react";
import PropTypes from "prop-types";

import {
  Title,
  SubTitle,
  Line,
  Text,
  TextContainer,
  ExtraText,
} from "./styles";

import { parseDate } from "../Tweets/scripts";
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
      date,
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
        {date && <Text {...settings}>{parseDate(date)}</Text>}
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

TextComponent.propTypes = {
  settings: PropTypes.object,
  items: PropTypes.object,
};

TextComponent.defaultProps = {
  settings: {},
  items: {
    title: "",
    subTitle: "",
    text: "",
    textList: {
      text: "",
      icon: "",
    },
    iconTitle: "",
    extraText: "",
    date: "",
  },
};

export default TextComponent;
