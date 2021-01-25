import React from "react";

import Icons from "../../components/BlockWithIcons";
import Introducing from "../../components/Introducing";
import Portfolio from "../../components/Portfolio";
import BlockWithIconList from "../../components/BlockWithIconList";
import Services from "../../components/Services";
import Partners from "../../components/Partners";

import iconsList from "../../assets/const/icons";
import introducingItems from "../../assets/const/introducingItems";
import portfolioItems from "../../assets/const/portfolioItems";
import iconsList2 from "../../assets/const/iconsList";
import servicesItems from "../../assets/const/servicesItems";
import partnersItems from "../../assets/const/partnersItems";
class Home extends React.Component {
  render() {
    return (
      <>
        <Icons items={iconsList} />
        <Introducing items={introducingItems} />
        <Portfolio items={portfolioItems} />
        <BlockWithIconList items={iconsList2} />
        <Introducing items={introducingItems} stl={{ marginLeft: "auto" }} />
        <Services items={servicesItems} />
        <Partners items={partnersItems} />
      </>
    );
  }
}

export default Home;
