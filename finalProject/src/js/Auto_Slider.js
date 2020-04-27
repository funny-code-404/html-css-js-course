class Auto_Slider {
   constructor(slider, buttons){
      this.slider = document.getElementById(`${slider}`);
      this.r_btn = document.getElementsByClassName(`${buttons}`);
      this.score_r_btn = 0;
   }
   started(){
      this.moveSlider();
   }
   moveSlider(){
      if (this.r_btn[this.r_btn.length-1].checked) {
         this.score_r_btn=0;
         this.r_btn[this.score_r_btn].checked=true;
      } else {
         this.r_btn[++this.score_r_btn].checked=true;
      }
      this.slider.setAttribute(`style`, `transform: translateX(-${this.score_r_btn}00vw)`);
   }
}

export default Auto_Slider;