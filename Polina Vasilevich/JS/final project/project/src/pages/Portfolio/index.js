import React from "react";

import IntroSlider from "../../components/IntroSlider";
import introSlider from "../../assets/const/portfolio/introSlider";
import Photos from "../../components/Photos";
import portfolioItems from "../../assets/const/portfolio/portfolioItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/portfolio/callToActionItems";

import Works from "../../components/Works";
import workItems from "../../assets/const/portfolio/workItems";
class Portfolio extends React.Component {
  render() {
    return (
      <>
        <IntroSlider items={introSlider} />
        <Photos
          items={portfolioItems}
          settings={{
            widthItemGridContainer: "390px",
            gridGap: "10px",
            gridRowGap: "10px",
            mediaGridBlock: "photos1",
            containerImgsColor: "#1A1A1D",
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
