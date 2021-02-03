import React from "react";

import IntroSlider from "../../components/IntroSlider";
import IconsList from "../../components/IconsList";
import Footer from "../../components/Footer";
import TextList from "../../components/TextList";
import CallToAction from "../../components/CallToAction";

import TwoColumnSection from "../../components/TwoColumSection";
import Percents from "../../components/PercentsBlock";
import TextWithImages from "../../components/TextWithImages";

import LogosList from "../../components/LogosList";

import iconList2 from "../../assets/const/iconList2";
import textListItems from "../../assets/const/servicesItems";
import businessItems from "../../assets/const/businessItems";
import logosItems from "../../assets/const/partnersItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

const firstItem = (
  <Percents
    items={businessItems.rightContent}
    backgroundColorMainContainer="#F6F7F8"
  />
);

const secondItem = <TextWithImages items={businessItems.leftContent} />;

class Demos extends React.Component {
  render() {
    return (
      <>
        <IntroSlider
          title="WE DO THE BEST DESIGN"
          subTitle="Dream Big. Think Different. Do Great"
        />
        
        <IconsList items={iconList2} 
          gridGap='4%' 
          widthItemGridContainer='350px'
          colorIcon='gradient'
          positionTextIcons='left'
          positionIcons='left'
          fontSizeIcon='42px'
        />


        <TextList items={textListItems.leftContent} isTransparentButton />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorContainer="#35C2EA"
          backgroundColorButton="#35C2EA"
          borderColorButton="#fff"
        />

        <TwoColumnSection
          sizeContainers="45% 55%"
          firstItem={firstItem}
          secondItem={secondItem}
        />
        <LogosList items={logosItems} oneString/>

        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Demos;
