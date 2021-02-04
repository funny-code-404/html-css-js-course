import React from "react";

import MainContainer from '../MainContainer';
import Text from '../Text';
import Images from '../Photos';

class Gallery extends React.Component {
  render() {
    const {
      gridGap, 
      widthItemGridContainer, 
      items, 
      paddingTop,
      paddingBottom,
      paddingLeftRight,
      backgroundColorMainContainer
       } = this.props;
       
      const contentConteiner = (
        <>
            <Text items={items} isLine />
            <Images items={items} gridGap={gridGap} widthItemGridContainer={widthItemGridContainer}/>
        </>
      )

    return (<MainContainer 
          backgroundColorMainContainer={backgroundColorMainContainer} 
          paddingTop={paddingTop} 
          paddingBottom={paddingBottom} 
          paddingLeftRight={paddingLeftRight}
          contentConteiner = {contentConteiner}
          />

     
    );
  }
}

export default Gallery;
