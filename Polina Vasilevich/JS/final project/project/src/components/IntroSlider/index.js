import { Container, Title, SubTitle, TextContainer } from "./styles";
import { Arrow } from "./styles";
import { handleScrollDown } from "../Button/handlers";

export default function IntroSlider(props) {
  const { title, subTitle, isArrow } = props;
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        {isArrow && <Arrow onClick={handleScrollDown}>&#709;</Arrow>}
      </TextContainer>
    </Container>
  );
}
