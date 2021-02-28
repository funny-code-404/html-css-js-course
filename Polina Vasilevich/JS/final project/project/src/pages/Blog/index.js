import React from "react";

import Tweets from "../../components/Tweets";

import tweetsItems from "../../assets/const/blog/tweetsItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/callToActionItems";
class Blog extends React.Component {
  render() {
    return (
      <>
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
