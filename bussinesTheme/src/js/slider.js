class Slider {
   constructor(){
      this.radioButtons;
      this.buttonArray;
      this.sliders;
      this.sliderNext=0;
      this.sliderNow=0;
   };
   sliderShow(){
      this.getElementsSlider();
      this.buttonClick();
   };
   buttonClick(){
      this.checkButtons();
      this.addStyleVision();
   }
   getElementsSlider(){
      this.radioButtons=document.getElementsByClassName(`button-slider`);
      this.sliders=document.getElementsByClassName(`slider__item`);
   };
   checkButtons(){
      for(let i=0; i<this.radioButtons.length; i++){
         if(this.radioButtons[i].checked==true){
            this.sliderNext=i;
            return
         }
      }
   };
   addStyleVision(){
      this.sliders[this.sliderNow].classList.remove('slide-vission');
      this.sliders[this.sliderNext].classList.add('slide-vission');
      this.sliderNow=this.sliderNext;
   };
};

export default Slider;