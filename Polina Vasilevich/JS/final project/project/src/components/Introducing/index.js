import React from "react";
import Title from "../BlockWithTitleAndText";
import Button from "../Button";

import { ContentContainer, MainContainer } from "./styles";
import { Wrapper } from "../../styles";
class Introducing extends React.Component {
  render() {
    const { buttonLabel, backgroundImg, buttonIcon } = this.props.items;
    const {
      items,
      positionBlock,
      positionText,
      buttonBackgroundColor,
      buttonColorColor,
    } = this.props;
    console.log(positionBlock);
    return (
      <MainContainer style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Wrapper>
          <ContentContainer
            positionText={positionText}
            position={positionBlock}
          >
            <Title items={items} />
            <Button
              buttonIcon={buttonIcon}
              buttonLabel={buttonLabel}
              backgroundColor={buttonBackgroundColor}
              borderColor={buttonColorColor}
            />
          </ContentContainer>
        </Wrapper>
      </MainContainer>
    );
  }
}

export default Introducing;
