import React from "react";
import Title from "../Title";
import Button from "../Button";

import { ContentContainer, MainContainer } from "./styles";
import { Wrapper } from "../../styles";
class Introducing extends React.Component {
  render() {
    const { buttonLabel, backgroundImg, buttonIcon } = this.props.items;
    const {
      items,
      positionBlockRight,
      buttonBackgroundColor,
      buttonColorColor,
    } = this.props;

    return (
      <MainContainer style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Wrapper>
          <ContentContainer positionBlockRight={positionBlockRight}>
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
