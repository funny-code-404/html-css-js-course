import React from "react";

import Tweets from "../../components/Tweets";

import Footer from "../../components/Footer";

import tweetsItems from "../../assets/const/tweetsItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

class Blog extends React.Component {
  render() {
    return (
      <>
        <Tweets items={tweetsItems} />
        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Blog;
