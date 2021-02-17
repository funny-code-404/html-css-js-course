import React from "react";
import { MainContainer, Wrapper } from "./styles";
import Typography from "../Typography";

export default function MainContainerComponent(props) {
  const {
    items,
    settings,
    isTitle,
    contentContainer,
    backgroundImg,
    deletePadding,
  } = props;

  return (
    <MainContainer {...settings} backgroundImg={backgroundImg}>
      <Wrapper {...settings} deletePadding={deletePadding}>
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
