import React from "react";
import Section from "../Section";

import Table from "../Table";

class Prices extends React.Component {
  render() {
    const { header, items } = this.props.items;

    const contentContainer = <Table items={items} />;

    return <Section items={header} children={contentContainer} />;
  }
}

export default Prices;
