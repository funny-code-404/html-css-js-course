import React from "react";

import IconsList from "../../components/IconsList";
import iconList1 from "../../assets/const/iconList1";
import IntroSlider from "../../components/IntroSlider";

import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider copy";
import slider2Items from "../../assets/const/slider4";

import Works from "../../components/Works";
import workItems from "../../assets/const/shop/workItems";
import CallToAction from "../../components/CallToAction";

import Portfolio from "../../components/Portfolio";
import portfolioItems from "../../assets/const/shop/portfolioItems";
import MainContainer from "../../components/MainContainer";
class Shop extends React.Component {
  render() {
    return (
      <>
        <IntroSlider
          title="CREATIVE MESS"
          subTitle="We make the best design around"
          isArrow
        />
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

        <Portfolio
          items={portfolioItems}
          settings={{ paddingTop: "0", paddingBottom: "0" }}
        />

        <Slider
          items={slider2Items}
          id="slider2"
          isDots
          stylesText="basicSlider"
          isLine
        />
        <MainContainer
          items={slider2Items}
          isTitle
          settings={{
            paddingLeftRight: "none",
            paddingBottom: "0",
          }}
          contentContainer={
            <Slider2 items={slider2Items} id="slider3" isArrows />
          }
        />
        <Works items={workItems} />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "blog",

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
