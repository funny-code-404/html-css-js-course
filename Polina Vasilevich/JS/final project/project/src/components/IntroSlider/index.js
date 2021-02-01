import { Container, Title, SubTitle, TextContainer } from "./styles";

export default function IntroSlider(props) {
  const { title, subTitle } = props;
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>
    </Container>
  );
}
