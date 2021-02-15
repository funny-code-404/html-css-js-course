import React from "react";

import IntroSlider from "../../components/IntroSlider";

import Photos from "../../components/Photos";
import portfolioItems from "../../assets/const/portfolioItems";

import CallToAction from "../../components/CallToAction";
import iconList1 from "../../assets/const/iconList1";

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
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "green",
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
