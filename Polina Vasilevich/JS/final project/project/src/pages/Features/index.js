import React from "react";

import IntroSlider from "../../components/IntroSlider";
import IconsList from "../../components/IconsList";
import Introducing from "../../components/Introducing";
import TextList from "../../components/Services/TextList";
import Slider from "../../components/Slider";
import Form from "../../components/Form";
import CallToAction from "../../components/CallToAction";

import iconList1 from "../../assets/const/iconList1";

import introducingItems from "../../assets/const/features/introItems";
import servicesItems from "../../assets/const/servicesItems";
import textListItems from "../../assets/const/features/textListItems.js";
import formItems from "../../assets/const/formItems";
import slider3Items from "../../assets/const/slider3";
import textList from "../../assets/const/demos/textListItems";

class Features extends React.Component {
  render() {
    return (
      <>
        <IntroSlider
          title="OUR SERVICES"
          subTitle="Dream Big. Think Different. Do Great"
        />
        <IconsList
          items={iconList1}
          settings={{
            fontSizeIcon: "l",
            formIcon: "circle",
            colorIconContainer: "gradient",
            sizeIconContainer: "middle",
            widthItemGridContainer: "270px",
          }}
        />

        <Introducing
          items={introducingItems}
          settings={{
            positionText: "right",
            positionContent: "right",
            widthContentContainer: "50%",
            heightMainContainer: "intro",
            isVerticalCenter: "true",
            stylesText: "textList",
          }}
        />

        <TextList
          items={textListItems}
          settings={{
            positionContentContainer: "right",

            positionText: "left",
            stylesText: "textList",
          }}
        />

        <Slider
          items={slider3Items}
          id="slider3"
          isDots
          stylesText="basicSlider"
          isLine
        />

        <IconsList
          items={servicesItems.rightContent}
          settings={{
            widthItemGridContainer: "300px",
            typeButton: "link",
            colorTextButton: "blue",
            gridGap: "4%",
            widthImg: "64px",
          }}
        />
        <Form
          idForm="form2"
          items={formItems}
          settings={{
            backgroundColorMainContainer: "dark",
            widthButton: "form",
          }}
        />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "lightBlue",
            colorButton: "green",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        />
      </>
    );
  }
}

export default Features;
