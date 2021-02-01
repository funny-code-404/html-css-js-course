import React from "react";

import IconsList from "../../components/IconsList";
import Introducing from "../../components/Introducing";
import TextList from "../../components/TextList";
import Section from '../../components/Section';
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";

import iconList1 from "../../assets/const/iconList1";
import introducingItems from "../../assets/const/introducingItems";
import servicesItems from "../../assets/const/servicesItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

const iconsList = (
  <IconsList
    paddingLeft='0'
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
          positionText="right"
          
        />

        <TextList  items={servicesItems.leftContent} isTransparentButton/>
        <Section items={servicesItems.leftContent} children={iconsList}/>
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorButton='#82b440'
          borderColorButton='#fff'
        />

        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Features;
