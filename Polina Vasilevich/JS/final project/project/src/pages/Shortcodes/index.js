import React from "react";

import IntroSlider from "../../components/IntroSlider";
import Form from "../../components/Form";
import CallToAction from "../../components/CallToAction";

import formItems from "../../assets/const/shortcodes/formItems";

class Shortcodes extends React.Component {
  render() {
    return (
      <>
        <IntroSlider title="CONTACT US" subTitle="Dream Big. Think Different" />
        <Form
          idForm="form3"
          items={formItems}
          settings={{ widthButton: "form" }}
        />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "blue",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        />
      </>
    );
  }
}

export default Shortcodes;
