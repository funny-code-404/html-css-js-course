import React from "react";

import IntroSlider from "../../components/IntroSlider";
import IconsList from "../../components/IconsList";
import Introducing from "../../components/Introducing";
import TextList from "../../components/Services/TextList";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";

import iconList1 from "../../assets/const/iconList1";
import introducingItems from "../../assets/const/introducingItems";
import servicesItems from "../../assets/const/servicesItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

const iconsList = (
  <IconsList
    paddingLeft="0"
    items={servicesItems.rightContent}
    numberColumns="3"
    positionIcon="center"
    gridGap="240px 0"
  />
);

class Features extends React.Component {
  render() {
    return (
      <>
        <IntroSlider
          title="OUR SERVICES"
          subTitle="Dream Big. Think Different. Do Great"
        />
        <IconsList
          items={iconList1}
          gridGap="4%"
          widthItemGridContainer="200px"
          formIcons="circle"
          gradientColorFormIcon
        />
        

        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
          positionText="right"
        />
        <TextList items={servicesItems.leftContent} isTransparentButton />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorButton="#82b440"
          backgroundColorMainContainer = "#82b440"
          paddingTop ='0'
          paddingBottom='0'
          borderColorButton="#fff"
        />

        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Features;
