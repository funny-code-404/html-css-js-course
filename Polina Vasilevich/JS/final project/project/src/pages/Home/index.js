import React from "react";

import IconsList from "../../components/IconsList";
import iconList1 from "../../assets/const/iconList1";
import iconList2 from "../../assets/const/iconList2";

import Introducing from "../../components/Introducing";
import introducingItems from "../../assets/const/introducingItems";

import Gallery from "../../components/Gallery";
import portfolioItems from "../../assets/const/portfolioItems";

import Partners from "../../components/Partners";
import PricingTables from "../../components/Prices";

import CallToAction from "../../components/CallToAction";
import Numbers from "../../components/Numbers";

import TwoColumnSection from "../../components/TwoColumSection";

import FirstItemForService from "../../components/Services/TextList";
import servicesItems from "../../assets/const/servicesItems";

import Percents from "../../components/PercentsBlock";
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
          sizeTitle="xl"
        />

        <IconsList
          items={iconList1}
          settings={{
            fontSizeIcon: "l",
            formIcon: "circle",
            colorIconContainer: "gradient",
            sizeIconContainer: "middle",
            widthItemGridContainer: "270px",

            gridGap: "3%",
          }}
        />

        <Introducing
          items={introducingItems}
          settings={{
            positionText: "left",
            widthContentContainer: "50%",
            heightMainContainer: "intro",
            isVerticalCenter: "true",
            stylesText: "textList",
          }}
        />

        <MainContainerComponent
          isTitle
          items={portfolioItems}
          settings={{
            paddingLeftRight: "none",
            paddingBottom: "0",
          }}
          contentContainer={
            <Photos
              items={portfolioItems}
              settings={{
                widthItemGridContainer: "442px",
                gridGap: "0",
              }}
            />
          }
        />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          settings={{
            backgroundColorMainContainer: "green",
            colorButton: "green",
            paddingTop: "0",
            paddingBottom: "0",
            heightFlexContainer: "callTo",
          }}
        />

        <IconsList
          items={iconList2}
          settings={{
            fontSizeIcon: "xl",
            widthItemGridContainer: "350px",
            colorIcon: "gradient",
            positionText: "left",
            positionIcons: "left",
            gridGap: "3%",
          }}
        />

        <Introducing
          items={introducingItems}
          settings={{
            positionText: "left",
            widthContentContainer: "50%",
            heightMainContainer: "778px",
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
          fontSizeTitle="m"
          isLine
        />
        <TwoColumnSection
          settings={{
            paddingLeftRight: "none",
            paddingTop: "0",
            paddingBottom: "0",
            sizeContainers: "40% 55%",
          }}
          firstItem={
            <FirstItemForService
              items={servicesItems.leftContent}
              settings={{
                backgroundColorMainContainer: "dark",
                paddingLeftRight: "small",
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
                typeButton: "link",
                colorTextButton: "blue",
                paddingLeftRight: "small",
                gridGap: "5%",
                widthImg: "64px",
              }}
            />
          }
        />

        <LogosList
          items={partnersItems}
          settings={{
            heightMainContainer: "logos",
          }}
          backgroundImg={partnersItems.backgroundImg}
        />
        <PricingTables items={pricingTables} buttonLabel="GET STARTED NOW" />

        {/* <Video items={videoItems}/> */}
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

        <TwoColumnSection
          settings={{
            paddingLeftRight: "none",
            paddingTop: "0",
            paddingBottom: "0",

            sizeContainers: "60% 40%",
          }}
          firstItem={<Articles items={businessItems.leftContent} />}
          secondItem={
            <Percents
              items={businessItems.rightContent}
              settings={{
                backgroundColorMainContainer: "dark",
                positionText: "left",
                colorTitle: "white",
                stylesText: "textList",
                paddingLeftRight: "small",
              }}
            />
          }
        />
        <Slider
          items={slider3Items}
          id="slider3"
          isDots
          fontSizeTitle="m"
          isLine
        />

        <MainContainerComponent
          isTitle
          items={blogItems}
          contentContainer={
            <Photos
              items={blogItems}
              settings={{
                widthItemGridContainer: "400px",
                gridItemRow: "1",
              }}
            />
          }
        />

        <Form
          items={formItems}
          settings={{
            backgroundColorMainContainer: "dark",
            // colorTitle: "#fff",
            // colorText: "grey",
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

export default Home;
