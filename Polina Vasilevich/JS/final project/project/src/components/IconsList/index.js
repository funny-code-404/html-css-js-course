import React from "react";

import MainContainer from "../MainContainer";
import Icons from "../Icon copy";

class IconsList extends React.Component {
  render() {
    const { settings, deletePadding } = this.props;
    const contentContainer = (
      <Icons deletePadding={deletePadding} {...this.props} />
    );
    return (
      <MainContainer
        id={this.props.id}
        settings={settings}
        contentContainer={contentContainer}
        deletePadding={deletePadding}
      />
    );
  }
}

export default IconsList;
