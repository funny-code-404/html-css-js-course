import React from "react";

import Introducing from "../../components/Introducing";
import Photos from "../../components/Photos";
import Services from "../../components/Services";
import Logos from "../../components/Logos";
import PricingTables from "../../components/Prices";
import Business from "../../components/Business";
import Blog from "../../components/Blog";
import CallToAction from "../../components/CallToAction";
import Numbers from "../../components/Numbers";
import ImgAndText from "../../components/ImgAndText";

import iconList1 from "../../assets/const/iconList1";
import introducingItems from "../../assets/const/introducingItems";
import portfolioItems from "../../assets/const/portfolioItems";
import iconList2 from "../../assets/const/iconList2";
import servicesItems from "../../assets/const/servicesItems";
import partnersItems from "../../assets/const/partnersItems";
import pricingTables, { blockHeader } from "../../assets/const/pricingTables";
import businessItems from "../../assets/const/businessItems";
import blogItems from "../../assets/const/blogItems";
import numbersItems from "../../assets/const/numbersItems";

class Home extends React.Component {
  render() {
    return (
      <>
        <ImgAndText
          items={iconList1}
          numberColumns="4"
          colorText="white"
          positionIcon="center"
          circleIcon
        />
        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
        />

        <Photos items={portfolioItems} numberGridColumns="4" />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
        />

        <ImgAndText
          items={iconList2}
          numberColumns="3"
          colorText="gradient"
          positionIcon="left"
        />
        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
          positionBlockRight
        />

        <Numbers items={numbersItems} />

        <Services items={servicesItems} />

        <Logos items={partnersItems} />
        <PricingTables
          items={pricingTables}
          header={blockHeader}
          buttonLabel="GET STARTED NOW"
        />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
        />
        <Business items={businessItems} />
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
