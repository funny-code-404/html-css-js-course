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
import Blog from "../../components/Blog";
import CallToAction from "../../components/CallToAction";
import Numbers from "../../components/Numbers";

import TwoColumnSection from "../../components/TwoColumSection";

import FirstItemForService from "../../components/Services/TextList";
import servicesItems from "../../assets/const/servicesItems";

import Percents from "../../components/PercentsBlock";

import TextWithImages from "../../components/TextWithImages";
import Video from "../../components/VideoComponent";
import Footer from "../../components/Footer";

import partnersItems from "../../assets/const/partnersItems";
import pricingTables from "../../assets/const/pricingTables";
import businessItems from "../../assets/const/businessItems";
import blogItems from "../../assets/const/blogItems";
import numbersItems from "../../assets/const/numbersItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";
import videoItems from "../../assets/const/videoItems";

import Slider from "../../components/Slider";
import sliderItems from "../../assets/const/slider";
import slider2Items from "../../assets/const/slider2";
import slider3Items from "../../assets/const/slider3";

import Form from "../../components/Form";
import formItems from "../../assets/const/formItems";


import IconList from '../../components/IconsList';

const firstItemForBusiness = (
  <TextWithImages items={businessItems.leftContent} />
);

const secondItemForBusiness = (
  <Percents
    items={businessItems.rightContent}
    backgroundColorMainContainer="#1f252f"
  />
);

class Home extends React.Component {
  render() {
    return (
      <>
        <Slider items={sliderItems} id='slider1' isDots isArrows fontSizeTitle='big'/>

        <IconList items={iconList1} 
            settings={{
              fontSizeIcon: 'l',
              formIcon: 'circle',
              colorIconContainer: 'gradient',
              sizeIconContainer: 'middle',
              widthItemGridContainer: '270px',
              
        }}/>

        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
          positionText="left"
          heightMainContainer="778px"
        />

        <Gallery
          items={portfolioItems}
          widthItemGridContainer="442px"
          gridGap="0"
          paddingLeftRight="none"
          paddingBottom="0"
        />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorMainContainer="#82b440"
          backgroundColorButton="#82b440"
          borderColorButton="#fff"
          paddingTop="0"
          paddingBottom="0"
        />

        {/* <IconsList
          items={iconList2}
          gridGap="4%"
          widthItemGridContainer="350px"
          colorIcon="gradient"
          positionText="left"
          positionIcons="left"
          fontSizeIcon="42px"
        /> */}

        <IconList items={iconList2} 
            settings={{
              fontSizeIcon: 'l',
              sizeIconContainer: 'middle',
              widthItemGridContainer: '350px',
              
        }}/>

        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
          positionContentContainer="right"
          positionText="left"
          heightMainContainer="778px"
        />

        <Numbers items={numbersItems} />
        <Slider items={slider2Items} id='slider2' isDots fontSizeTitle='m' isLine/>
        <TwoColumnSection
          sizeContainers="45% 55%"
          firstItem={
            <FirstItemForService
              items={servicesItems.leftContent}
              backgroundColorMainContainer="#1f252f"
            />
          }
          secondItem={
            <IconsList
              items={servicesItems.rightContent}
              gridGap="4%"
              widthItemGridContainer="250px"
              paddingLeftRight="small"
            />
          }
        />

        <Partners items={partnersItems} heightMainContainer="1277px" />

        <PricingTables items={pricingTables} buttonLabel="GET STARTED NOW" />

        {/* <Video items={videoItems}/> */}
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorMainContainer="#82b440"
          backgroundColorButton="#82b440"
          borderColorButton="#fff"
          paddingTop="0"
          paddingBottom="0"
        />

        <TwoColumnSection
          sizeContainers="55% 45%"
          firstItem={firstItemForBusiness}
          secondItem={secondItemForBusiness}
        />
        <Slider items={slider3Items} id='slider3' isDots fontSizeTitle='m' isLine/>
        <Blog items={blogItems} />
        <Form items={formItems} backgroundColorMainContainer='#212121' colorTitle='#fff' colorText='#999999'/>
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorMainContainer="#82b440"
          backgroundColorButton="#82b440"
          borderColorButton="#fff"
          paddingTop="0"
          paddingBottom="0"
        />
        
        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Home;
