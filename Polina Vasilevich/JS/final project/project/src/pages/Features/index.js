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
import iconsListItems from "../../assets/const/features/iconsListItems";
import textListItems from "../../assets/const/features/textListItems.js";
import formItems from "../../assets/const/formItems";
import slider3Items from "../../assets/const/slider3";
import callToItems from "../../assets/const/callToActionItems";
import MainContainer from "../../components/MainContainer";
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
            widthContentContainer: "70ch",
            heightMainContainer: "intro",
            isVerticalCenter: "true",
            stylesText: "textList",
          }}
        />
        <TextList
          items={textListItems}
          settings={{
            positionContentContainer: "right",
            widthContentContainer: "70ch",
            positionText: "left",
            stylesText: "textList",
            heightMainContainer: "intro",
          }}
        />
        <Slider
          items={slider3Items}
          id="slider3"
          isDots
          stylesText="basicSlider"
          isLine
          heightSliderContainer="slider2"
        />
        <MainContainer
          isTitle
          items={iconsListItems}
          settings={{
            stylesBlock: "featuresIconsListBlock",
          }}
          contentContainer={
            <IconsList
              items={iconsListItems.list}
              settings={{
                stylesBlock: "featuresIconsList",
                stylesIcon: "iconsList3",
                gridGap: "4%",
                gridRowGap: "144px",
                widthImg: "64px",
                widthItemGridContainer: "300px",

                stylesButton: "link",
                colorTextButton: "linkBlue",
              }}
            />
          }
        />

        <Form
          idForm="form2"
          items={formItems}
          settings={{
            backgroundColorMainContainer: "featuresForm",
            widthButton: "form",
          }}
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

export default Features;
