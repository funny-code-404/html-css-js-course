import React from "react";

import MainContainer from "../MainContainer";
import Icons from "../Icon copy";

class IconsList extends React.Component {
  render() {
    const { settings } = this.props;

    const contentContainer = <Icons {...this.props} />;

    return (
      <MainContainer settings={settings} contentContainer={contentContainer} />
    );
  }
}

export default IconsList;
