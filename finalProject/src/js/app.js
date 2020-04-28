import Slider_Auto from './Auto_slider.js';
import Slider_with_nav from './Slider_with_nav.js';
import Slider_without_radio from './Slider_without_radio.js'

window.onload = function () {

   function main() {
      if (document.querySelector(`.main_slider-slides`)) {
         const main_slider = new Slider_with_nav(`main_slider-nav_left`, `main_slider-nav_right`, `main_slider-slides`, `main_slider-button`, `main_slider-buttons`);
         main_slider.addListner();
      }
      if (document.querySelector(`.main_parralax-slides`)) {
         const slider_parallax = new Slider_Auto(`main_parralax-slides`, `main_parralax-button`, `main_parralax-buttons`);
         setInterval(() => { slider_parallax.moveSlider() }, 4000);
      };
      if (document.querySelector(`.main_lastest-twitter-slides`)) {
         const slider_twitter = new Slider_Auto(`main_lastest-twitter-slides`, `main_lastest-twitter-button`, `main_lastest-twitter-buttons`);
         setInterval(() => { slider_twitter.moveSlider() }, 4000);
      };
      if (document.querySelector(`.main_carousel-product-slides`)){
         const product_slider = new Slider_without_radio(`main_carousel-product-nav_left`, `main_carousel-product-nav_right`, `main_carousel-product-slides`, `main_carousel-product_slide`);
         product_slider.addListner();
      }
   }

   main();
}