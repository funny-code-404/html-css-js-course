import React from "react";
import PropTypes from "prop-types";
import { MainContainer, Wrapper } from "./styles";
import Typography from "../Typography";

MainContainerComponent.propTypes = {
  items: PropTypes.object,
  settings: PropTypes.object,
  isTitle: PropTypes.bool,
  contentContainer: PropTypes.object,
  backgroundImg: PropTypes.string,
  deletePadding: PropTypes.bool,
  id: PropTypes.string,
  styles: PropTypes.object,
};

MainContainerComponent.defaultProps = {
  items: {},
  settings: {},
  isTitle: false,
  contentContainer: {},
  backgroundImg: "",
  deletePadding: false,
  id: "",
  styles: {},
};

export default function MainContainerComponent(props) {
  const {
    items,
    settings,
    isTitle,
    contentContainer,
    backgroundImg,
    deletePadding,
    id,
    styles,
  } = props;

  return (
    <MainContainer
      {...settings}
      backgroundImg={backgroundImg}
      id={id}
      style={styles}
    >
      <Wrapper {...settings} style={styles} deletePadding={deletePadding}>
        {isTitle && (
          <Typography
            isLine
            items={items}
            settings={settings}
            stylesText="main"
          />
        )}
        {contentContainer}
      </Wrapper>
    </MainContainer>
  );
}
