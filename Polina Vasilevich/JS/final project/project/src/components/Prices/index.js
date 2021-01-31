import React from "react";
import TitleAndText from "../BlockWithTitleAndText";
import Button from "../Button";
import Section from "../Section";

import Table from "../Table";

import { GridContainer } from "../../styles";
import { InfoContainer, PriceContainer, ItemInfoContainer } from "./styles";
class Prices extends React.Component {
  render() {
    const { items, buttonLabel, backgroundImage } = this.props;
    const { header } = this.props;

    const contentContainer = <Table items={items} />;

    return <Section items={header} children={contentContainer} />;
  }
}

export default Prices;
