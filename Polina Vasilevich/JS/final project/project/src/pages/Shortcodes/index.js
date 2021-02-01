import React from "react";

import IntroSlider from "../../components/IntroSlider";

import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

class Shortcodes extends React.Component {
  render() {
    return (
      <>
        <IntroSlider title="CONTACT US" subTitle="Dream Big. Think Different" />
        <CallToAction />
        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Shortcodes;
