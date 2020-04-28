class Slider_with_nav {
   constructor(leftButton, rightButton, slider, radioButtons, conteiner_btn) {
      this.leftButton = document.querySelector(`#${leftButton}`);
      this.rightButton = document.querySelector(`#${rightButton}`);
      this.slider = document.querySelector(`#${slider}`);
      this.radioButtons = document.querySelectorAll(`.${radioButtons}`);
      this.conteiner_btn = document.querySelector(`.${conteiner_btn}`);
      this.positionMove = 0;
      this.positionRadio = 0;
   }
   addListner() {
      this.leftButton.addEventListener(`click`, () => this.moveSlider(100, -1));
      this.rightButton.addEventListener(`click`, () => this.moveSlider(-100, 1));
      this.conteiner_btn.addEventListener(`click`, (e) => { e.preventDefault() });
      this.radioButtons[0].checked = true;
   }
   moveSlider(directionSlider, directionRadio) {
      this.checkingPosition(directionSlider, directionRadio);
      this.slider.setAttribute(`style`, `transform: translateX(${this.positionMove}vw)`);
      this.radioButtons[this.positionRadio].checked = true;
   }
   checkingPosition(directionSlider, directionRadio) {
      this.positionMove += directionSlider;
      this.positionRadio += directionRadio;
      if (this.positionMove > 0) {
         this.positionMove = -300;
         this.positionRadio = 3;
      } else if (this.positionMove < -300) {
         this.positionMove = 0;
         this.positionRadio = 0;
      }
   }
}

export default Slider_with_nav;