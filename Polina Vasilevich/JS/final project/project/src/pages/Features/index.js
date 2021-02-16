import React from "react";

import IntroSlider from "../../components/IntroSlider";
import IconsList from "../../components/IconsList";
import Introducing from "../../components/Introducing";
import TextList from "../../components/Services/TextList";
import Slider from "../../components/Slider";
import Form from "../../components/Form";
import CallToAction from "../../components/CallToAction";

import iconList1 from "../../assets/const/iconList1";

import introducingItems from "../../assets/const/introducingItems";
import servicesItems from "../../assets/const/servicesItems";
import formItems from "../../assets/const/formItems";
import slider3Items from "../../assets/const/slider3";

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
            positionContent: "right",
            positionText: "right",
            widthContentContainer: "50%",
            heightMainContainer: "778px",
            isVerticalCenter: "true",
          }}
        />

        {/* <TextList
          items={servicesItems.leftContent}
          settings={{
            positionText: "right",
            widthContentContainer: "50%",
            heightMainContainer: "778px",
            isVerticalCenter: "true",
          }}
        /> */}

        <TextList
          items={servicesItems.leftContent}
          settings={{ positionContentContainer: "right", positionText: "left" }}
        />

        <Slider
          items={slider3Items}
          id="slider3"
          isDots
          fontSizeTitle="m"
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
          items={formItems}
          settings={{
            backgroundColorMainContainer: "dark",
            colorButton: "green",
            widthButton: "form",
          }}
        />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "green",
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
