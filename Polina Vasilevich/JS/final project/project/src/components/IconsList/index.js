import React from "react";
import PropTypes from "prop-types";

import MainContainer from "../MainContainer";
import Icons from "../Icon";

class IconsList extends React.Component {
  render() {
    const { settings, deletePadding } = this.props;
    return (
      <MainContainer
        id={this.props.id}
        settings={settings}
        deletePadding={deletePadding}
        contentContainer={
          <Icons deletePadding={deletePadding} {...this.props} />
        }
      />
    );
  }
}

IconsList.propsTypes = {
  settings: PropTypes.object,
  deletePadding: PropTypes.bool,
  items: PropTypes.array,
  id: PropTypes.number,
};

IconsList.defaultProps = {
  settings: {},
  deletePadding: false,
  items: [],
  id: 0,
};

export default IconsList;
