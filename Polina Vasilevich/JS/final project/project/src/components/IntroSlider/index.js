import { Container, Title, SubTitle, TextContainer } from "./styles";
import { Arrow } from "./styles";
import { handleScrollDown } from "../Button/handlers";

export default function IntroSlider(props) {
  const { items, isArrow } = props;
  return (
    <Container backgroundImg={items.backgroundImg}>
      <TextContainer>
        <Title>{items.title}</Title>
        <SubTitle>{items.subTitle}</SubTitle>
        {isArrow && (
          <Arrow onClick={handleScrollDown} value="footer">
            <i className="ti-angle-down"></i>
          </Arrow>
        )}
      </TextContainer>
    </Container>
  );
}
