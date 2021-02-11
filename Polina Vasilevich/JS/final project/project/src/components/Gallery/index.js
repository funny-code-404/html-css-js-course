import React from "react";

import MainContainer from "../MainContainer";
import Images from "../Photos";

class Gallery extends React.Component {
  render() {
    const {items, settings, gridGap, widthItemGridContainer} = this.props;
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
        settings={settings}
        contentContainer={contentContainer}
      />
    );
  }
}

export default Gallery;
