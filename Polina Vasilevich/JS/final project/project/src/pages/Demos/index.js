import React from "react";

import IntroSlider from "../../components/IntroSlider";
import introSlider from "../../assets/const/demos/introSlider";

import IconsList from "../../components/IconsList";
import iconList from "../../assets/const/demos/iconList";

import TextList from "../../components/Services/TextList";
import textListItems from "../../assets/const/demos/textListItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/demos/callToActionItems";

import Slider from "../../components/Slider";
import sliderItems from "../../assets/const/demos/slider";

import TwoColumnSection from "../../components/TwoColumSection";

import ProgressBar from "../../components/ProgressBar";
import Articles from "../../components/Services/Articles";
import businessItems from "../../assets/const/demos/businessItems";

import LogosList from "../../components/LogosList";
import logosItems from "../../assets/const/demos/logos";

import Video from "../../components/VideoComponent";
import videoItems from "../../assets/const/demos/videoItems";

class Demos extends React.Component {
  render() {
    return (
      <>
        <IntroSlider items={introSlider} />

        <IconsList
          items={iconList}
          id="iconsList"
          settings={{
            stylesBlock: "homeIconsList",
            widthItemGridContainer: "350px",
            colorIcon: "gradient",
            stylesIcon: "gradientIcons",
            positionText: "left",
            positionIcons: "left",
            gridGap: "3%",
            gridRowGap: "38px",
          }}
        />

        <TextList
          items={textListItems}
          settings={{
            positionContentContainer: "right",
            positionText: "left",
            stylesText: "textList",
            widthContentContainer: "70ch",
          }}
        />
        <CallToAction
          items={callToItems}
          settings={{
            backgroundColorMainContainer: "callToLightBlue",
            stylesBlock: "callTo",
          }}
        />

        <Video items={videoItems} />
        <TwoColumnSection
          settings={{
            stylesBlock: "withoutPadding",

            sizeContainers: "40% 60%",
          }}
          firstItem={
            <ProgressBar
              items={businessItems.rightContent}
              settings={{
                stylesText: "progressBarSkills",
                backgroundColorMainContainer: "progressBarLight",
                stylesProgressBar: "light",
                stylesBlock: "twoColumns",
              }}
            />
          }
          secondItem={<Articles items={businessItems.leftContent} />}
        />
        <Slider
          items={sliderItems}
          id="slider3"
          isDots
          stylesText="basicSlider"
          isLine
          heightSliderContainer="slider2"
        />
        <LogosList
          items={logosItems}
          oneString
          settings={{
            heightMainContainer: "callTo",
            paddingBottom: "0",
            paddingTop: "0",
            stylesBlock: "demosLogosList",
            backgroundColorMainContainer: "logos",
            stylesGridContainer: "demos",
          }}
        />
      </>
    );
  }
}

export default Demos;
