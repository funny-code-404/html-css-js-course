import { Title, SubTitle, Line, Text, TextContainer } from "./styles";

export default function TextComponent(props) {
  const {settings, items, isLine} = props;
  const {title, subTitle, text} = items;
  return (
    <TextContainer {...settings}>
      <Title {...settings}>
        {/* {icon && <i className={icon} style={{ color: "#9bcb5b" }}></i>} */}
        {title}
      </Title>
      {isLine && <Line {...settings} ></Line>}

      {subTitle && <SubTitle {...settings}></SubTitle>}

      <Text {...settings}>{text}</Text>

      {/* {textList &&
        textList.text.map((item) => {
          return (
            <Text colorText={colorText}>
              <i className={textList.icon}></i>
              {`>  ${item}`}
            </Text>
          );
        })} */}
    </TextContainer>
  );
}
