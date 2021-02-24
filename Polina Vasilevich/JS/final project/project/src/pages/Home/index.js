import React from "react";

import IconsList from "../../components/IconsList";
import iconList1 from "../../assets/const/iconList1";
import iconList2 from "../../assets/const/iconList2";

import Introducing from "../../components/Introducing";
import introducingItems from "../../assets/const/introducingItems";

import portfolioItems from "../../assets/const/portfolioItems";

import PricingTables from "../../components/Prices";

import CallToAction from "../../components/CallToAction";
import callToItems from "../../assets/const/callToActionItems";
import Numbers from "../../components/Numbers";

import TwoColumnSection from "../../components/TwoColumSection";

import FirstItemForService from "../../components/Services/TextList";
import servicesItems from "../../assets/const/servicesItems";

import ProgressBar from "../../components/ProgressBar";
import LogosList from "../../components/LogosList";
import Video from "../../components/VideoComponent";
import videoItems from "../../assets/const/videoItems";

import partnersItems from "../../assets/const/partnersItems";
import pricingTables from "../../assets/const/pricingTables";
import businessItems from "../../assets/const/businessItems";
import blogItems from "../../assets/const/blogItems";
import numbersItems from "../../assets/const/numbersItems";

import Slider from "../../components/Slider";
import sliderItems from "../../assets/const/slider";
import slider2Items from "../../assets/const/slider2";
import slider3Items from "../../assets/const/slider3";

import Form from "../../components/Form";
import formItems from "../../assets/const/formItems";

import Articles from "../../components/Services/Articles";
import Photos from "../../components/Photos";
import MainContainerComponent from "../../components/MainContainer";
class Home extends React.Component {
  render() {
    return (
      <>
        <Slider
          items={sliderItems}
          id="slider1"
          isDots
          isArrows
          stylesText="bigSlider"
          heightSliderContainer="slider1"
        />

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
            positionText: "left",
            widthContentContainer: "70ch",
            heightMainContainer: "intro",
            isVerticalCenter: "true",
            stylesText: "textList",
          }}
        />

        <MainContainerComponent
          isTitle
          items={portfolioItems}
          settings={{
            stylesBlock: "photos",
          }}
          contentContainer={
            <Photos
              items={portfolioItems}
              settings={{
                widthItemGridContainer: "390px",
                gridGap: "0",
                gridRowGap: "0",
                mediaGridBlock: "photos1",
              }}
            />
          }
        />

        <CallToAction
          items={callToItems}
          settings={{
            backgroundColorMainContainer: "callToGreen",
            stylesBlock: "callTo",
          }}
        />

        <IconsList
          items={iconList2}
          id="iconsList2"
          settings={{
            stylesBlock: "iconsList2",
            widthItemGridContainer: "350px",
            colorIcon: "gradient",
            positionText: "left",
            positionIcons: "left",
            gridGap: "3%",
            gridRowGap: "38px",
          }}
        />

        <Introducing
          items={introducingItems}
          settings={{
            positionText: "left",
            widthContentContainer: "70ch",

            positionContentContainer: "right",
            isVerticalCenter: "true",
            heightMainContainer: "intro",
            stylesText: "textList",
          }}
        />
        <Numbers items={numbersItems} />
        <Slider
          items={slider2Items}
          id="slider2"
          isDots
          stylesText="basicSlider"
          isLine
          heightSliderContainer="slider2"
        />

        <TwoColumnSection
          settings={{
            stylesBlock: "withoutPadding",
            sizeContainers: "40% 60%",
            numberInVisibleBlock: "1",
          }}
          firstItem={
            <FirstItemForService
              items={servicesItems.leftContent}
              settings={{
                backgroundColorMainContainer: "dark",
                stylesBlock: "twoColumns",

                positionContentContainer: "left",
                positionText: "left",
                stylesText: "textList",
              }}
            />
          }
          secondItem={
            <IconsList
              items={servicesItems.rightContent}
              settings={{
                stylesBlock: "twoColumns",

                gridGap: "17%",
                gridRowGap: "120px",
                widthImg: "64px",

                stylesButton: "link",
                colorTextButton: "linkBlue",
              }}
            />
          }
        />

        <LogosList
          items={partnersItems}
          settings={{
            heightMainContainer: "logos",
            widthItemGridContainer: "240px",
            gridGap: 0,
            gridRowGap: "77px",
          }}
          isTitle
          backgroundImg={partnersItems.backgroundImg}
        />

        <PricingTables items={pricingTables} buttonLabel="GET STARTED NOW" />

        <Video items={videoItems} />

        <CallToAction
          items={callToItems}
          settings={{
            backgroundColorMainContainer: "callToGreen",
            stylesBlock: "callTo",
          }}
        />

        <TwoColumnSection
          settings={{
            stylesBlock: "withoutPadding",

            sizeContainers: "60% 40%",
            inVisibleBlock: "2",
          }}
          firstItem={<Articles items={businessItems.leftContent} />}
          secondItem={
            <ProgressBar
              items={businessItems.rightContent}
              settings={{
                stylesText: "progressBarSkills",
                backgroundColorMainContainer: "dark",
                paddingLeftRight: "small",
              }}
            />
          }
        />
        <Slider
          items={slider3Items}
          id="slider3"
          isDots
          stylesText="basicSlider"
          isLine
          heightSliderContainer="slider2"
        />

        <MainContainerComponent
          isTitle
          items={blogItems}
          contentContainer={
            <Photos
              items={blogItems}
              settings={{
                widthItemGridContainer: "392px",
                gridItemRow: "1",
              }}
            />
          }
        />

        <Form
          items={formItems}
          idForm="form1"
          settings={{
            backgroundColorMainContainer: "dark",
            widthButton: "form",
          }}
        />

        <CallToAction
          items={callToItems}
          settings={{
            backgroundColorMainContainer: "callToGreen",
            stylesBlock: "callTo",
          }}
        />
      </>
    );
  }
}

export default Home;
