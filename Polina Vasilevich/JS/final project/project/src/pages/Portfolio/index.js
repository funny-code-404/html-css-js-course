import React from "react";

import IntroSlider from "../../components/IntroSlider";

import Photos from "../../components/Photos";
import portfolioItems from "../../assets/const/portfolio/portfolioItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/callToActionItems";
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
            gridRowGap: "0",
            widthItemGridContainer: "442px",
          }}
        />

        <Works items={workItems} />
        <CallToAction
          items={callToItems}
          settings={{
            stylesBlock: "callTo",
            backgroundColorMainContainer: "callToGreen",
          }}
        />
      </>
    );
  }
}

export default Portfolio;
