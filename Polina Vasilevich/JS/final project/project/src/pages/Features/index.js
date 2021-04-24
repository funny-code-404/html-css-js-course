import React from "react";

import IntroSlider from "../../components/IntroSlider";
import introSlider from "../../assets/const/features/introSlider";

import IconsList from "../../components/IconsList";
import iconsListItems from "../../assets/const/features/iconsListItems";
import iconList1 from "../../assets/const/features/iconList1";

import Introducing from "../../components/Introducing";
import introducingItems from "../../assets/const/features/introItems";

import TextList from "../../components/Services/TextList";
import textListItems from "../../assets/const/features/textListItems.js";

import Slider from "../../components/Slider";
import sliderItems from "../../assets/const/features/slider1";

import Form from "../../components/Form";
import formItems from "../../assets/const/features/formItems";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/features/callToActionItems";

import MainContainer from "../../components/MainContainer";
class Features extends React.Component {
  render() {
    return (
      <>
        <IntroSlider items={introSlider} />

        <IconsList
          items={iconList1}
          settings={{
            formIcon: "circle",
            colorIconContainer: "gradient",
            sizeIconContainer: "middle",
            mediaGridBlock: "iconsList1",
            gridGap: "3%",
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
          }}
        />
        <Slider
          items={sliderItems}
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
