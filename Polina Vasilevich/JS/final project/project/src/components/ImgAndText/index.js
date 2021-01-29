import React from "react";
import { GridContainer } from "../../styles";
import {
  ContentContainer,
  Title,
  Text,
  Icon,
  TextContainer,
  IconWrapper,
} from "./styles";

import { Wrapper } from "../../styles";
class ImgAndText extends React.Component {
  render() {
    const {
      items,
      numberColumns,
      colorText,
      positionIcon,
      circleIcon,
      gridGap,
    } = this.props;

    return (
      <section>
        <Wrapper>
          <GridContainer numberColumns={numberColumns} gridGap={gridGap}>
            {items.map(({ img, icon, title, text }) => {
              return (
                <ContentContainer positionIcon={positionIcon}>
                  {img ? (
                    <img src={img} alt={title} />
                  ) : (
                    <IconWrapper>
                      <Icon
                        colorText={colorText}
                        circleIcon={circleIcon}
                        className={`${icon}`}
                      ></Icon>
                    </IconWrapper>
                  )}

                  <TextContainer>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                  </TextContainer>
                </ContentContainer>
              );
            })}
          </GridContainer>
        </Wrapper>
      </section>
    );
  }
}

export default ImgAndText;
