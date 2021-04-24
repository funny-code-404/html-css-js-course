import React from "react";

import IntroSlider from "../../components/IntroSlider";
import introSlider from "../../assets/const/shortcodes/introSlider";

import Form from "../../components/Form";
import formItems from "../../assets/const/shortcodes/formItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/shortcodes/callToActionItems";

class Shortcodes extends React.Component {
  render() {
    return (
      <>
        <IntroSlider items={introSlider} />
        <Form
          idForm="form3"
          items={formItems}
          settings={{ widthButton: "form", sizeInput: "shortcodes" }}
        />
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

export default Shortcodes;
