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
        {isArrow && (
          <Arrow onClick={handleScrollDown} value="footer">
            <i className="ti-angle-down"></i>
          </Arrow>
        )}
      </TextContainer>
    </Container>
  );
}
