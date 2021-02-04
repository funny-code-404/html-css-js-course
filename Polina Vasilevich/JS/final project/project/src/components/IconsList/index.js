import React from "react";
import { GridContainer, MainContainer, Wrapper} from "../../mainStyles";

import {ContentContainer} from './styles';
import Icon from '../Icon';
import Text from '../Text';

class IconsList extends React.Component {
  render() {
    const {gridGap, 
      widthItemGridContainer, 
      items, 
      formIcons, 
      colorIcon, 
      gradientColorFormIcon, 
      positionTextIcons, 
      positionIcons, 
      fontSizeIcon,
      paddingTopBottom,
      paddingLeftRight,
       } = this.props;
       
    return (
        <MainContainer backgroundColorMainContainer={this.props.backgroundColorMainContainer}>
          <Wrapper paddingTopBottom={paddingTopBottom} paddingLeftRight={paddingLeftRight}>
            <GridContainer gridGap={gridGap} widthItemGridContainer={widthItemGridContainer}>
              {items.map((item) => {
                return (
                  <ContentContainer positionTextIcons={positionTextIcons} positionIcons={positionIcons}>
                    <Icon items={item} formIcons={formIcons} colorIcon={colorIcon} gradientColorFormIcon={gradientColorFormIcon} fontSizeIcon={fontSizeIcon}/> 
                    <Text items={item} fontSizeTitle='xs' fontWeightTitle='lg' positionText='center'/>
                  </ContentContainer>
                );
              })}
            </GridContainer>
        </Wrapper>
    </MainContainer>
          
    );
  }
}

export default IconsList;
