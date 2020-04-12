import Slider from './slider';
import ServiceBlock from './serviceBlock';
import MobileMenu from './mobileMenu';
import ContentForSlider from './getContentForSlider';

window.onload = function(){
   Slider();
   ServiceBlock();
   MobileMenu();
   ContentForSlider();

   //получение данных для кнопок
   const serviceItemPicture = document.getElementsByClassName(`serviceItem_picture`);
   const serviceItemTitle = document.getElementsByClassName(`serviceItem_title`);
   const serviceItemText = document.getElementsByClassName('serviceItem_text');
   const urlServiceBlock = `https://google.com`;
   const config  = {
      method: `GET`
   };
   getServiceBlock(urlServiceBlock, config);
   function getServiceBlock(url, config){
      fetch(url, config)
         .then((res)=>{
            return res.json();
         })
         .then((res)=>{
            innerContentForServiceBlock(res);
         });
   };
   function innerContentForServiceBlock(res){
      let numberBlock = 0;
      for (let content of res){
         serviceItemPicture[numberBlock].setAttribute(`style`, `background-image: url(${content.image})`);
         serviceItemTitle[numberBlock].innerHTML=content.title;
         serviceItemText[numberBlock].innerHTML=content.text;
         numberBlock++;
      };
   };

   function contactUs(){

   }
};