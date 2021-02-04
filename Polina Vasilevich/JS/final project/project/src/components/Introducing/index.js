import React from "react";
import Text from '../Text';
import Button from "../Button";

import {Wrapper, MainContainer, ContentContainer } from "../../mainStyles";

class Introducing extends React.Component {
  render() {
    const { buttonLabel, backgroundImg, buttonIcon } = this.props.items;
    const {
      items,
      positionTextContainer,
      positionText,
      buttonBackgroundColor,
      buttonColor,
    } = this.props;


    return (
      <MainContainer style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Wrapper>
          <ContentContainer widthContentContainer ='50%'>
            <Text 
              items={items}
              isLine
              positionText={positionText}
              positionTextContainer={positionTextContainer}
            />
            <Button
              buttonIcon={buttonIcon}
              buttonLabel={buttonLabel}
              backgroundColor={buttonBackgroundColor}
              borderColor={buttonColor}
            />
          </ContentContainer>
        </Wrapper>
      </MainContainer>
    );
  }
}

export default Introducing;
