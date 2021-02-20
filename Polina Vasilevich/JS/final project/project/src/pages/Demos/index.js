import React from "react";

import IntroSlider from "../../components/IntroSlider";
import IconsList from "../../components/IconsList";
import TextList from "../../components/Services/TextList";
import CallToAction from "../../components/CallToAction";
import Slider from "../../components/Slider";
import TwoColumnSection from "../../components/TwoColumSection";
import Percents from "../../components/PercentsBlock";
import Articles from "../../components/Services/Articles";

import LogosList from "../../components/LogosList";

import iconList2 from "../../assets/const/iconList2";
import textListItems from "../../assets/const/demos/textListItems";
import businessItems from "../../assets/const/businessItems";
import logosItems from "../../assets/const/demos/logos";
import slider3Items from "../../assets/const/slider3";
import Video from "../../components/VideoComponent";
import videoItems from "../../assets/const/videoItems";
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
            fontSizeIcon: "xl",
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
          }}
        />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "blue",
            colorButton: "blue",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        />
        <Video items={videoItems} />
        <TwoColumnSection
          settings={{
            paddingLeftRight: "none",
            paddingTop: "0",
            paddingBottom: "0",

            sizeContainers: "40% 60%",
          }}
          firstItem={
            <Percents
              items={businessItems.rightContent}
              settings={{
                positionText: "left",
                colorTitle: "white",
                stylesText: "textList",
                paddingLeftRight: "small",
                backgroundColorMainContainer: "grey",
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
        />

        <LogosList
          items={logosItems}
          oneString
          settings={{
            heightMainContainer: "callTo",
            paddingBottom: "20px",
            paddingTop: "20px",
            paddingLeftRight: "small",
            backgroundColorMainContainer: "logos",
          }}
        />
      </>
    );
  }
}

export default Demos;
