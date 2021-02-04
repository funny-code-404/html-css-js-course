import React from "react";
import MainContainer from "../MainContainer";

import Table from "../Table";

class Prices extends React.Component {
  render() {
    const { header, items } = this.props.items;

    const contentContainer = <Table items={items} />;

    return (
      <MainContainer
        isTitle
        items={header}
        contentContainer={contentContainer}
      />
    );
  }
}

export default Prices;
