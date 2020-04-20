function Slider() {
   const slider_items = document.getElementsByClassName(`slider_item`);
   const left_arrow = document.getElementById(`slider__left-arrow`);
   const right_arrow = document.getElementById(`slider__right-arrow`);   

   left_arrow.addEventListener(`click`, swapSlider);
   right_arrow.addEventListener(`click`, swapSlider);

   let slider_now = 0;
   let slider_next;
   console.log('ji');
   
   slider_items[slider_now].classList.add(`slider-vision`);
   function swapSlider(e){
      // if (e.currentTarget.id===`slider__left-arrow`){
      //    nextItem(-1);
      // } else {
      //    nextItem(1);
      // }
      (e.currentTarget.id===`slider__left-arrow`) ? nextItem(-1) : nextItem(1);
      function nextItem(a){
         slider_next=slider_now+a;
         if (slider_next<0){
            slider_next=slider_items.length-1;
         } else if (slider_next>=slider_items.length){
            slider_next=0;
         };      
         slider_items[slider_now].classList.remove(`slider-vision`);
         slider_items[slider_next].classList.add(`slider-vision`);
         slider_now=slider_next;
      };
   };
};

export default Slider;