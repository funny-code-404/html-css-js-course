import { Title, SubTitle, Line, Text, TextContainer } from "./styles";

export default function TextComponent(props) {
  const { settings, items, isLine } = props;
  const { title, subTitle, text, textList, iconTitle } = items;
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

      {textList &&
        textList.text.map((item) => {
          return (
            <Text {...settings}>
              <i className={textList.icon}></i>
              {`>  ${item}`}
            </Text>
          );
        })}
    </TextContainer>
  );
}
