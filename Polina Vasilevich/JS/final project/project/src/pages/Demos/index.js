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
import textListItems from "../../assets/const/servicesItems";
import businessItems from "../../assets/const/businessItems";
import logosItems from "../../assets/const/partnersItems";
import slider3Items from "../../assets/const/slider3";

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
          }}
        />

        <TextList
          items={textListItems.leftContent}
          settings={{ positionContentContainer: "right", positionText: "left" }}
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

        <TwoColumnSection
          settings={{
            sizeContainers: "45% 55%",
            paddingLeftRight: "none",
            paddingTop: "0",
            paddingBottom: "0",
          }}
          firstItem={
            <Percents
              items={businessItems.rightContent}
              settings={{
                positionText: "left",
              }}
            />
          }
          secondItem={<Articles items={businessItems.leftContent} />}
        />

        <Slider
          items={slider3Items}
          id="slider3"
          isDots
          fontSizeTitle="m"
          isLine
        />
        <LogosList
          items={logosItems}
          oneString
          settings={{
            backgroundColorMainContainer: "logos",
            heightMainContainer: "callTo",
          }}
        />
      </>
    );
  }
}

export default Demos;
