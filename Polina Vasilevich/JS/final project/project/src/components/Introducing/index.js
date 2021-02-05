import React from "react";
import MainContainer from "../MainContainer";
import Text from "../Text";
import Button from "../Button";

import { ContentContainer } from "../../mainStyles";

class Introducing extends React.Component {
  render() {
    const { buttonLabel, backgroundImg, buttonIcon } = this.props.items;
    const {
      items,
      positionContentContainer,
      positionText,
      buttonBackgroundColor,
      buttonColor,
      heightMainContainer,
    } = this.props;

    const contentContainer = (
      <ContentContainer
        widthContentContainer="50%"
        positionContentContainer={positionContentContainer}
       
      >
        <Text items={items} isLine positionText={positionText} />
        <Button
          buttonIcon={buttonIcon}
          buttonLabel={buttonLabel}
          backgroundColor={buttonBackgroundColor}
          borderColor={buttonColor}
        />
      </ContentContainer>
    );

    return (
      <MainContainer
        contentContainer={contentContainer}
        backgroundImg={backgroundImg}
        heightMainContainer={heightMainContainer}
        isVerticalCenter
      />
    );
  }
}

export default Introducing;
