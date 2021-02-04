import React from "react";

import MainContainer from '../MainContainer';
import Icon from '../Icon';
import Text from '../Text';
import {ContentContainer} from './styles'
import { GridContainer} from "../../mainStyles";

class IconsList extends React.Component {
  render() {
    const {
      gridGap, 
      widthItemGridContainer, 
      items, 
      formIcons, 
      colorIcon, 
      gradientColorFormIcon, 
      positionIcons, 
      fontSizeIcon,
      paddingTopBottom,
      paddingLeftRight,
      backgroundColorMainContainer,
      positionText,
       } = this.props;
       
      const contentConteiner = (
        <GridContainer gridGap={gridGap} widthItemGridContainer={widthItemGridContainer}>
              {items.map((item) => {
                return (
                  <ContentContainer positionIcons={positionIcons} positionContentContainer='center'>
                    <Icon items={item} formIcons={formIcons} colorIcon={colorIcon} gradientColorFormIcon={gradientColorFormIcon} fontSizeIcon={fontSizeIcon}/> 
                    <Text items={item} fontSizeTitle='xs' fontWeightTitle='lg' positionText={ positionText}/>
                  </ContentContainer>
                );
              })}
        </GridContainer>
      )

    return (<MainContainer 
          backgroundColorMainContainer={backgroundColorMainContainer} 
          paddingTopBottom={paddingTopBottom} 
          paddingLeftRight={paddingLeftRight}
          contentConteiner = {contentConteiner}
          />

     
    );
  }
}

export default IconsList;
