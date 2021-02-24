import React from "react";

import Tweets from "../../components/Tweets";

import tweetsItems from "../../assets/const/tweetsItems";

class Blog extends React.Component {
  render() {
    return (
      <>
        <Tweets items={tweetsItems} />
      </>
    );
  }
}

export default Blog;
