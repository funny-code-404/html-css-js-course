import React from "react";

import IntroSlider from "../../components/IntroSlider";
import IconsList from "../../components/IconsList";
import TextList from "../../components/Services/TextList";
import CallToAction from "../../components/CallToAction";
import Slider from "../../components/Slider";
import TwoColumnSection from "../../components/TwoColumSection";
import ProgressBar from "../../components/ProgressBar";
import Articles from "../../components/Services/Articles";

import LogosList from "../../components/LogosList";

import iconList2 from "../../assets/const/iconList2";
import textListItems from "../../assets/const/demos/textListItems";
import businessItems from "../../assets/const/businessItems";
import logosItems from "../../assets/const/demos/logos";
import slider3Items from "../../assets/const/slider3";
import Video from "../../components/VideoComponent";
import videoItems from "../../assets/const/videoItems";
import callToItems from "../../assets/const/callToActionItems";
class Demos extends React.Component {
  render() {
    return (
      <>
        <IntroSlider
          title="WE DO THE BEST DESIGN"
          subTitle="Dream Big. Think Different. Do Great"
        />
        <IconsList
          items={iconList2}
          settings={{
            widthItemGridContainer: "350px",
            colorIcon: "gradient",
            positionText: "left",
            positionIcons: "left",
            gridGap: "3%",
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
          items={slider3Items}
          id="slider3"
          isDots
          stylesText="basicSlider"
          isLine
          heightSliderContainer="slider1"
        />
        <LogosList
          items={logosItems}
          oneString
          settings={{
            heightMainContainer: "callTo",
            paddingBottom: "0",
            paddingTop: "0",
            stylesBlock: "twoColumns",
            backgroundColorMainContainer: "logos",
            oneStringLogosList: "true",
            widthItemGridContainer: "11%",
          }}
        />
      </>
    );
  }
}

export default Demos;
