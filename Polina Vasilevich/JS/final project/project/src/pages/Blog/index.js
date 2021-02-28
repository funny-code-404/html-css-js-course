import React from "react";

import IntroSlider from "../../components/IntroSlider";
import introSlider from "../../assets/const/blog/introSlider";
import Tweets from "../../components/Tweets";

import tweetsItems from "../../assets/const/blog/tweetsItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/blog/callToActionItems";
class Blog extends React.Component {
  render() {
    return (
      <>
        <IntroSlider items={introSlider} />
        <Tweets items={tweetsItems} />
        <CallToAction
          items={callToItems}
          settings={{
            backgroundColorMainContainer: "callToLightBlue",
            stylesBlock: "callTo",
          }}
        />
      </>
    );
  }
}

export default Blog;
