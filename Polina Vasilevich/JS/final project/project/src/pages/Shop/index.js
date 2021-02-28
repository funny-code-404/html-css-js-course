import React from "react";

import IconsList from "../../components/IconsList";
import iconList1 from "../../assets/const/iconList1";

import IntroSlider from "../../components/IntroSlider";
import introSlider from "../../assets/const/shop/introSlider";

import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider copy";

import sliderItems from "../../assets/const/shop/slider1";

import Works from "../../components/Works";
import workItems from "../../assets/const/shop/workItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/shop/callToActionItems";

import Portfolio from "../../components/Portfolio";
import portfolioItems from "../../assets/const/shop/portfolioItems";

import MainContainer from "../../components/MainContainer";

class Shop extends React.Component {
  render() {
    return (
      <>
        <IntroSlider items={introSlider} isArrow />
        <IconsList
          items={iconList1}
          settings={{
            formIcon: "circle",
            colorIconContainer: "gradient",
            sizeIconContainer: "middle",
            mediaGridBlock: "iconsList1",
            gridGap: "3%",
          }}
        />

        <Portfolio
          items={portfolioItems}
          settings={{ stylesBlock: "shopPortfolio" }}
        />

        <Slider
          items={sliderItems}
          id="slider2"
          isDots
          stylesText="basicSlider"
          isLine
          heightSliderContainer="slider2"
        />
        <MainContainer
          items={sliderItems}
          isTitle
          settings={{
            paddingLeftRight: "none",
            paddingBottom: "0",
          }}
          contentContainer={
            <Slider2 items={sliderItems} id="slider3" isArrows />
          }
        />

        <Works items={workItems} />

        <CallToAction
          items={callToItems}
          settings={{
            backgroundColorMainContainer: "blog",
            stylesBlock: "callTo",
          }}
        />
      </>
    );
  }
}

export default Shop;
