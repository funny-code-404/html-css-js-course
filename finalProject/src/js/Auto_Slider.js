class Slider_Auto {
   constructor(slider, buttons, container_btn){
      this.conteiner_btn = document.querySelector(`.${container_btn}`);
      this.slider = document.querySelector(`#${slider}`);
      this.r_btn = document.querySelectorAll(`.${buttons}`);
      this.count_btn = this.r_btn.length-1;
      this.score_r_btn = 0;
      this.r_btn[0].checked=true;
      this.conteiner_btn.addEventListener(`click`, (e)=>{e.preventDefault()});
   }
   started(){
      this.moveSlider();
   }
   moveSlider(){ 
      this.score_r_btn++;
      if(this.score_r_btn>this.count_btn){
         this.score_r_btn=0;
      }
      this.r_btn[this.score_r_btn].checked=true;
      this.slider.setAttribute(`style`, `transform: translateX(-${this.score_r_btn}00vw)`);
   }
}

export default Slider_Auto;