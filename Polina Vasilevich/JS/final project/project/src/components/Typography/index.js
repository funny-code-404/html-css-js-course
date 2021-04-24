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

export default function TextComponent({ settings, items, isLine }) {
  const { title, subTitle, text, textList, iconTitle, extraText, date } = items;
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
      {isLine && <Line {...settings}></Line>}

      {subTitle && <SubTitle {...settings}>{subTitle}</SubTitle>}

      {text && <Text {...settings}>{text}</Text>}
      {extraText && <ExtraText {...settings}>{extraText}</ExtraText>}
      {date && <Text {...settings}>{parseDate(date)}</Text>}
      {textList &&
        textList.text.map((item, index) => {
          return (
            <Text key={`text${index}`} {...settings}>
              <i className={textList.icon}></i>
              {`  ${item}`}
            </Text>
          );
        })}
    </TextContainer>
  );
}
