class WhatTheSaysSectionSlider {
   constructor(options){
      this.leftButton = document.getElementById(`what-they-says_left-click`);
      this.rightButton = document.getElementById(`what-they-says_right-click`);
      this.slider = document.getElementById(`what-they-says_sliders`);
      this.radioButtons = document.getElementsByClassName(`what-they-says_slider-radBtn`);
      this.positionMove=0;
      this.positionRadio=0;
   }
   addListner(){
      this.leftButton.addEventListener(`click`, ()=>this.moveSlider(100, -1));
      this.rightButton.addEventListener(`click`, ()=>this.moveSlider(-100, 1));
      for (let button of this.radioButtons) {
         button.addEventListener(`click`,(e)=>(e.preventDefault()))
      }
      this.radioButtons[0].checked=true;
   }
   moveSlider(directionSlider, directionRadio){
      this.checkingPosition(directionSlider, directionRadio);
      this.slider.setAttribute(`style`, `transform: translateX(${this.positionMove}vw)`);
      this.radioButtons[this.positionRadio].checked=true;
   }
   checkingPosition(directionSlider, directionRadio){
      this.positionMove+=directionSlider;    
      this.positionRadio+=directionRadio;
      if(this.positionMove>0){
         this.positionMove=-300;
         this.positionRadio=3;
      } else if(this.positionMove<-300){
         this.positionMove=0;
         this.positionRadio=0;
      }
   }
}

export default WhatTheSaysSectionSlider;