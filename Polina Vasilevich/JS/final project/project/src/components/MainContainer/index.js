import React from "react";
import { MainContainer, Wrapper } from "./styles";
import Text from "../Text";

export default function MainContainerComponent(props) {
  const {
    items,
    backgroundImg,
    contentContainer,
    backgroundColorMainContainer,
    paddingTop,
    paddingBottom,
    paddingLeftRight,
    isTitle,
    heightMainContainer,
    isVerticalCenter,
    positionText,
    colorTitle,
    colorText,
  } = props;

  return (
    <MainContainer
      backgroundColorMainContainer={backgroundColorMainContainer}
      backgroundImg={backgroundImg}
      heightMainContainer={heightMainContainer}
      isVerticalCenter={isVerticalCenter}
    >
      <Wrapper
        paddingLeftRight={paddingLeftRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        {isTitle && <Text items={items} isLine positionText={positionText} colorTitle={colorTitle} colorText={colorText}/>}

        {contentContainer}
      </Wrapper>
    </MainContainer>
  );
}
