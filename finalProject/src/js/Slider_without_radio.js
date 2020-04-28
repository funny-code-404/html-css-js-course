class Slider_without_radio {
   constructor(leftButton, rightButton, slider, slide) {
      this.leftButton = document.querySelector(`#${leftButton}`);
      this.rightButton = document.querySelector(`#${rightButton}`);
      this.slider = document.querySelector(`#${slider}`);
      this.maxPositionMove = document.querySelectorAll(`.${slide}`).length/2*25;
      this.positionMove = 0;
   }
   addListner() {
      this.leftButton.addEventListener(`click`, () => this.moveSlider(25));
      this.rightButton.addEventListener(`click`, () => this.moveSlider(-25));
   }
   moveSlider(directionSlider) {
      this.checkingPosition(directionSlider);
      this.slider.setAttribute(`style`, `transform: translateX(${this.positionMove}vw)`);
   }
   checkingPosition(directionSlider) {
      this.positionMove += directionSlider;
      if (this.positionMove > 0) {
         this.positionMove = -this.maxPositionMove;
      } else if (this.positionMove < -this.maxPositionMove) {
         this.positionMove = 0;
      }
   }
}

export default Slider_without_radio;