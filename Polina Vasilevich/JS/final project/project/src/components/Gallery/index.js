import React from "react";

import MainContainer from "../MainContainer";
import Images from "../Photos";

class Gallery extends React.Component {
  render() {
    const { items, settings } = this.props;
    const contentContainer = <Images items={items} settings={settings} />;

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
