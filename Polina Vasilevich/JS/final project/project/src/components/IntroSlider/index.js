import PropTypes from "prop-types";

import { Container, Title, SubTitle, TextContainer } from "./styles";
import { Arrow } from "./styles";

IntroSlider.propTypes = {
  items: PropTypes.object,
  backgroundImg: PropTypes.string,
};

IntroSlider.defaultProps = {
  items: {
    title: "",
    text: "",
  },
  backgroundImg: "",
};

const handleScrollDown = (e) => {
  e.preventDefault();

  window.scroll({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

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
