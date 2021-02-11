import React from "react";
import { MainContainer, Wrapper } from "./styles";
import Typography from "../Typography";

export default function MainContainerComponent(props) {
  const {items, settings, isTitle, contentContainer, backgroundImg} = props;
  return (
    <MainContainer {...settings} backgroundImg={backgroundImg}>
      <Wrapper {...settings}>
        {isTitle && <Typography isLine items={items} {...settings}/>}
        {contentContainer}
      </Wrapper>
    </MainContainer>
  );
}
