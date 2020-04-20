import OurServiceLive from './our-services-section.js';
import WhatTheSaysSectionSlider from './whatTheSaysSectionSlider.js';
import NavMenu from './NavMenu.js';
import AboutUsSlider from './AboutUsSlider.js';

window.onload = function(){  
   function startScript(){
      const ourServiceButtons = new OurServiceLive();
      ourServiceButtons.startetPageFunction();

      const whatTheSaycSectionSlider = new WhatTheSaysSectionSlider();
      whatTheSaycSectionSlider.addListner();

      const aboutUsSlider = new AboutUsSlider();
      setInterval(()=>{aboutUsSlider.started()}, 4000);
   
      const navMenu = new NavMenu();
      navMenu.moveSite();
   }
   startScript()
}