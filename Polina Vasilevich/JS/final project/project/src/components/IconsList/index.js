import React from "react";
import { GridContainer } from "../../styles";
import Button from '../Button';

import {
  IconsContainer,
  Title,
  Text,
  Icon,
  TextContainer,
  IconWrapper,
} from "./styles";

import {ContentContainer, WrapperBlock} from '../../styles';

class IconsBoxes extends React.Component {
  render() {
    const {
      items,
      numberColumns,
      colorText,
      positionIcon,
      circleIcon,
      gridGap,
      backgroundColorMainContainer,
      paddingLeft,
      paddingRight,
      paddingTop, 
      paddingBottom,
    } = this.props;

    return (
      <ContentContainer backgroundColorMainContainer={backgroundColorMainContainer}>
        <WrapperBlock 
        paddingLeft={paddingLeft} 
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}>

        <GridContainer numberColumns={numberColumns} gridGap={gridGap}>
          {items.map(({ img, icon, title, text, buttonLabel, buttonIcon }) => {
            return (
              <IconsContainer positionIcon={positionIcon}>
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
                
                {buttonLabel && <Button backgroundColor='transparent' 
                                        borderColor='transparent'
                                        colorText='#4285f4' 
                                        buttonLabel={buttonLabel}
                                        buttonIcon={buttonIcon}
                                        />}
              </IconsContainer>
            );
          })}
        </GridContainer>
        </WrapperBlock>
        
      </ContentContainer>
    );
  }
}

export default IconsBoxes;
