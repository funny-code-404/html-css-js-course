import React from "react";

import Introducing from "../../components/Introducing";
import Portfolio from "../../components/Portfolio";
import IconsList from "../../components/BlockWithIconList";
import Services from "../../components/Services";
import Partners from "../../components/Partners";
import PricingTables from "../../components/PricingTables";
import Business from "../../components/Business";
import Blog from "../../components/Blog";
import CallToAction from "../../components/CallToAction";
import Numbers from "../../components/NumberAnimation";

import iconsList from "../../assets/const/icons";
import introducingItems from "../../assets/const/introducingItems";
import portfolioItems from "../../assets/const/portfolioItems";
import iconsList2 from "../../assets/const/iconsList";
import servicesItems from "../../assets/const/servicesItems";
import partnersItems from "../../assets/const/partnersItems";
import pricingTables, { blockHeader } from "../../assets/const/pricingTables";
import business from "../../assets/const/business";
import blogItems from "../../assets/const/blogItems";
import numbersItems from "../../assets/const/numbersItems";
class Home extends React.Component {
  render() {
    return (
      <>
        <section>
          <IconsList
            items={iconsList}
            styleImg="circleIcon whiteColor"
            styleImgContainer="positionCenter"
            styleGridContainer="fourColumnsGrid"
          />
        </section>

        <Introducing items={introducingItems} />
        <Portfolio items={portfolioItems} style="0" />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
        />
        <section>
          <IconsList
            items={iconsList2}
            styleImg="gradientColor"
            styleImgContainer="flex"
            styleGridContainer="threeColumnsGrid"
          />
        </section>

        <Introducing
          items={introducingItems}
          positionBlock="positionRightBlock"
        />
        <Numbers items={numbersItems} />
        <Services items={servicesItems} />
        <Partners items={partnersItems} />
        <PricingTables
          items={pricingTables}
          header={blockHeader}
          buttonLabel="GET STARTED NOW"
        />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
        />
        <Business items={business} />
        <Blog items={blogItems} />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
        />
      </>
    );
  }
}

export default Home;
