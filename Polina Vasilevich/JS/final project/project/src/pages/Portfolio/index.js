import React from "react";

import IntroSlider from "../../components/IntroSlider";

import Photos from "../../components/Photos copy";
import portfolioItems from "../../assets/const/portfolio/portfolioItems";

import CallToAction from "../../components/CallToAction";

import Works from "../../components/Works";
import workItems from "../../assets/const/shop/workItems";
class Portfolio extends React.Component {
  render() {
    return (
      <>
        <IntroSlider title="CONTACT US" subTitle="Dream Big. Think Different" />
        <Photos
          items={portfolioItems}
          settings={{
            gridGap: "0",
            widthItemGridContainer: "442px",
          }}
        />

        <Works items={workItems} />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "blog",
            colorButton: "green",
            paddingTop: "0",
            paddingBottom: "0",
            heightFlexContainer: "callTo",
          }}
        />
      </>
    );
  }
}

export default Portfolio;
