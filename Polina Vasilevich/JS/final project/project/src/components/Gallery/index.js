import React from "react";

import MainContainer from "../MainContainer";
import Text from "../Text";
import Images from "../Photos";

class Gallery extends React.Component {
  render() {
    const {
      gridGap,
      widthItemGridContainer,
      items,
      paddingTop,
      paddingBottom,
      paddingLeftRight,
      backgroundColorMainContainer,
    } = this.props;

    const contentContainer = (
      <Images
        items={items}
        gridGap={gridGap}
        widthItemGridContainer={widthItemGridContainer}
      />
    );

    return (
      <MainContainer
        isTitle
        items={items}
        backgroundColorMainContainer={backgroundColorMainContainer}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeftRight={paddingLeftRight}
        contentContainer={contentContainer}
      />
    );
  }
}

export default Gallery;
