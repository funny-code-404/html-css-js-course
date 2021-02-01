import React from "react";

import Introducing from "../../components/Introducing";
import Photos from "../../components/Photos";
import Partners from "../../components/Partners";
import PricingTables from "../../components/Prices";
import Blog from "../../components/Blog";
import CallToAction from "../../components/CallToAction";
import Numbers from "../../components/Numbers";
import IconsList from "../../components/IconsList";

import TwoColumnSection from "../../components/TwoColumSection";
import Percents from "../../components/PercentsBlock";

import Footer from "../../components/Footer";

import iconList1 from "../../assets/const/iconList1";
import introducingItems from "../../assets/const/introducingItems";
import portfolioItems from "../../assets/const/portfolioItems";
import iconList2 from "../../assets/const/iconList2";
import servicesItems from "../../assets/const/servicesItems";
import partnersItems from "../../assets/const/partnersItems";
import pricingTables from "../../assets/const/pricingTables";
import businessItems from "../../assets/const/businessItems";
import blogItems from "../../assets/const/blogItems";
import numbersItems from "../../assets/const/numbersItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

import TextList from "../../components/TextList";
import TextWithImages from "../../components/TextWithImages";

const firstItemForService = (
  <TextList items={servicesItems.leftContent} />
);

const secondItemForService = (
  <IconsList
    paddingLeft='0'
    items={servicesItems.rightContent}
    numberColumns="3"
    positionIcon="center"
    gridGap="240px 0"
  />
);

const firstItemForBusiness = (
  <TextWithImages items={businessItems.leftContent} />
);

const secondItemForBusiness = (
  <Percents items={businessItems.rightContent} backgroundColorMainContainer='#1f252f'/>
);

class Home extends React.Component {
  render() {
    return (
      <>
        <IconsList
          paddingLeft='19%'
          paddingRight='19%'
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
          backgroundColorButton='#82b440'
          borderColorButton='#fff'
        />

        <IconsList
          paddingLeft='19%'
          paddingRight='19%'
          items={iconList2}
          numberColumns="3"
          gridGap="120px 5%"
          colorText="gradient"
          positionIcon="left"
          paddingTopBottom="100px"
        />

        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
          positionBlock="right"
        />

        <Numbers items={numbersItems} />

        <TwoColumnSection
          sizeContainers="45% 55%"
          firstItem={firstItemForService}
          secondItem={secondItemForService}
        />

        <Partners items={partnersItems} />

        <PricingTables
          items={pricingTables}
          buttonLabel="GET STARTED NOW"
        />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorButton='#82b440'
          borderColorButton='#fff'
        />

        <TwoColumnSection
          sizeContainers="55% 45%"
          firstItem={firstItemForBusiness}
          secondItem={secondItemForBusiness}
        />

        <Blog items={blogItems} />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
        />

        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Home;
