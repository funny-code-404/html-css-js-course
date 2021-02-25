import React from "react";

import IntroSlider from "../../components/IntroSlider";
import Form from "../../components/Form";
import CallToAction from "../../components/CallToAction";

import formItems from "../../assets/const/shortcodes/formItems";
import callToItems from "../../assets/const/callToActionItems";
class Shortcodes extends React.Component {
  render() {
    return (
      <>
        <IntroSlider title="CONTACT US" subTitle="Dream Big. Think Different" />
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
