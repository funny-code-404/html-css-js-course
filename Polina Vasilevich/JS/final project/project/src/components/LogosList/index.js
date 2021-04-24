import PropTypes from "prop-types";
import { ContentContainer, Logo, GridContainer } from "./styles";
import MainContainer from "../MainContainer";

LogosList.propTypes = {
  items: PropTypes.object,
  settings: PropTypes.object,
  backgroundImg: PropTypes.string,
  isTitle: PropTypes.bool,
};

LogosList.defaultProps = {
  items: {
    imgs: [],
  },

  settings: {},
  backgroundImg: "",
  isTitle: false,
};

export default function LogosList({ items, settings, backgroundImg, isTitle }) {
  return (
    <MainContainer
      items={items}
      backgroundImg={backgroundImg}
      settings={settings}
      isTitle={isTitle}
      contentContainer={
        <GridContainer {...settings}>
          {items.imgs.map((item, index) => {
            return (
              <ContentContainer key={`logo ${index}`}>
                <Logo src={item} alt={item} />
              </ContentContainer>
            );
          })}
        </GridContainer>
      }
    />
  );
}
