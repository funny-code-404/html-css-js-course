import React from "react";

import Introducing from "../../components/Introducing";
import Portfolio from "../../components/Portfolio";
import IconsList from "../../components/BlockWithIconList";
import Services from "../../components/Services";
import Partners from "../../components/Partners";
import PricingTables from "../../components/PricingTables";
import Business from "../../components/Business";

import iconsList from "../../assets/const/icons";
import introducingItems from "../../assets/const/introducingItems";
import portfolioItems from "../../assets/const/portfolioItems";
import iconsList2 from "../../assets/const/iconsList";
import servicesItems from "../../assets/const/servicesItems";
import partnersItems from "../../assets/const/partnersItems";
import pricingTables from "../../assets/const/pricingTables";
import business from "../../assets/const/business";

class Home extends React.Component {
  render() {
    return (
      <>
        <IconsList
          items={iconsList}
          classIcon="circleIcon"
          classContainer="iconSmallContainer positionCenter"
        />
        <Introducing items={introducingItems} />
        <Portfolio items={portfolioItems} style="0" />
        <IconsList
          items={iconsList2}
          classContainer="iconMiddleContainer"
          classIcon="gradientColorIcon"
        />
        <Introducing items={introducingItems} stl={{ marginLeft: "auto" }} />
        <Services items={servicesItems} />
        <Partners items={partnersItems} />
        <PricingTables items={pricingTables} buttonLabel="GET STARTED NOW" />
        <Business items={business} />
      </>
    );
  }
}

export default Home;
