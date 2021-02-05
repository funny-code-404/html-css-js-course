import React from "react";
import MainContainer from "../MainContainer";
import LogosList from "../LogosList";

class Logos extends React.Component {
  render() {
    const { backgroundImg } = this.props.items;
    const { items, heightMainContainer } = this.props;

    const contentContainer = <LogosList items={items} />;

    return (
      <MainContainer
        isTitle
        items={items}
        backgroundImg={backgroundImg}
        contentContainer={contentContainer}
        heightMainContainer={heightMainContainer}
      />
    );
  }
}
export default Logos;
