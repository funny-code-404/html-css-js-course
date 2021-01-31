import React from "react";

import IconsList from "../../components/IconsList";
import Footer from "../../components/Footer";
import TextList from "../../components/TextList";
import CallToAction from "../../components/CallToAction";
import LogosList from "../../components/LogosList";

import iconList2 from "../../assets/const/iconList2";
import textListItems from "../../assets/const/servicesItems";
import logosItems from "../../assets/const/partnersItems";

import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

class Demos extends React.Component {
  render() {
    return (
      <>
        <IconsList
          items={iconList2}
          numberColumns="3"
          gridGap="120px 5%"
          colorText="gradient"
          positionIcon="left"
        />
        <TextList items={textListItems.leftContent} />
        <CallToAction />
        <LogosList items={logosItems} />

        {/* <IconsList
          items={iconList1}
          numberColumns="4"
          gridGap="20px"
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
        <IconsList
          items={iconList2}
          numberColumns="3"
          gridGap="120px 5%"
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
        /> */}
        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Demos;
