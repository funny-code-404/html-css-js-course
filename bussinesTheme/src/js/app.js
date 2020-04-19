import Slider from './slider.js';
window.onload = function(){
   const slider = new Slider();
   slider.sliderShow();
   const buttonsSlider = document.getElementsByClassName('button-slider');
   for(let button of buttonsSlider){
      button.addEventListener('click', buttonClick);
   }
   function buttonClick(){
      return slider.buttonClick();
   }

   const full_name_headerSection = document.getElementById('full-name-header');
   const email_headerSection = document.getElementById('email-header');
   const phone_headerSection = document.getElementById('phone-header');
   const send_button_headerSection = document.getElementById('send-button-header');

   send_button_headerSection.addEventListener('click', sendInformationOfHeader);
   function sendInformationOfHeader(){
      let res = {
         name: full_name_headerSection,
         email: email_headerSection,
         phone: phone_headerSection
      };
      const config = {
         method: POST,
         url: google.com
      }
      
   }
}
