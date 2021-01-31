import React from "react";
import Section from "../Section";
import LogosList from "../LogosList";

class Logos extends React.Component {
  render() {
    const { imgs, backgroundImg } = this.props.items;
    const { items } = this.props;

    const contentContainer = <LogosList items={items} />;
    return (
      <Section
        items={items}
        backgroundImg={backgroundImg}
        children={contentContainer}
        height="1277px"
      />
    );
  }
}
export default Logos;
