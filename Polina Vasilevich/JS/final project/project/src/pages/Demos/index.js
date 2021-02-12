import React from "react";

import IntroSlider from "../../components/IntroSlider";
import IconsList from "../../components/IconsList";
import Footer from "../../components/Footer";
import TextList from "../../components/Services/TextList";
import CallToAction from "../../components/CallToAction";

import TwoColumnSection from "../../components/TwoColumSection";
import Percents from "../../components/PercentsBlock";
import Articles from "../../components/Services/Articles";

import LogosList from "../../components/LogosList";

import iconList2 from "../../assets/const/iconList2";
import textListItems from "../../assets/const/servicesItems";
import businessItems from "../../assets/const/businessItems";
import logosItems from "../../assets/const/partnersItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

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
          settings={{ positionContentContainer: "right" }}
        />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "green",
            colorButton: "green",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        />

        <TwoColumnSection
          sizeContainers="45% 55%"
          firstItem={
            <Percents
              items={businessItems.rightContent}
              settings={{
                positionText: "left",
                colorTitle: "white",
              }}
            />
          }
          secondItem={
            <Articles
              items={businessItems.leftContent}
              settings={{
                backgroundColorMainContainer: "dark",
              }}
            />
          }
        />

        <LogosList items={logosItems} oneString />
      </>
    );
  }
}

export default Demos;
