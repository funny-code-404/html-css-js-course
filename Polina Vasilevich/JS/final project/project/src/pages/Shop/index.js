import React from "react";

import IconsList from "../../components/IconsList";
import iconList1 from "../../assets/const/iconList1";

import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider copy";
import slider2Items from "../../assets/const/slider2";

import Works from "../../components/Works";
import CallToAction from "../../components/CallToAction";

import Portfolio from "../../components/Portfolio";
import portfolioItems from "../../assets/const/shop/portfolioItems";

class Shop extends React.Component {
  render() {
    return (
      <>
        <IconsList
          items={iconList1}
          settings={{
            fontSizeIcon: "l",
            formIcon: "circle",
            colorIconContainer: "gradient",
            sizeIconContainer: "middle",
            widthItemGridContainer: "270px",
          }}
        />
        <Slider
          items={slider2Items}
          id="slider2"
          isDots
          fontSizeTitle="m"
          isLine
        />
        <Slider2 items={slider2Items} id="slider3" isArrows />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "green",

            paddingTop: "0",
            paddingBottom: "0",
            heightFlexContainer: "callTo",
          }}
        />
        {/* <Portfolio items={portfolioItems} />
        <Slider
          items={slider2Items}
          id="slider2"
          isDots
          fontSizeTitle="m"
          isLine
        />
        
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
        /> */}
      </>
    );
  }
}

export default Shop;
