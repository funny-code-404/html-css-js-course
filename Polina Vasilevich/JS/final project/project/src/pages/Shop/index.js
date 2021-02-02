import React from "react";

import IconsList from "../../components/IconsList";
import Works from "../../components/Works";
import CallToAction from "../../components/CallToAction";
import BlockImg from '../../components/BlockImg';
import Footer from "../../components/Footer";

import iconList1 from "../../assets/const/iconList1";
import imgs from '../../assets/const/shop/photos';

import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";
class Shop extends React.Component {
  render() {
    return (
      <>
        <IconsList
          paddingLeft="19%"
          paddingRight="19%"
          items={iconList1}
          numberColumns="4"
          gridGap="20px"
          colorText="white"
          positionIcon="center"
          circleIcon
        />

        <BlockImg items={imgs}/>
        <Works
          title="Let‘s Work Together"
          subTitle="TheFox WordPress is the best in the business. They know we deliver industry leading web design every time. We would love to learn how we can support you too."
          buttonLabel="GET STARTED NOW"
          buttonIcon="ti-check"
        />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorContainer="#4285F4"
          borderColorButton="#fff"
        />

        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Shop;
