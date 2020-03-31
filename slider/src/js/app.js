window.onload = function(){
   let leftButton = document.getElementById('leftButton');
   let rightButton = document.getElementById('rightButton');
   let slider_el1 = document.getElementById('slider-el1');
   let slider_el2 = document.getElementById('slider-el2');
   let slider_el3 = document.getElementById('slider-el3');
   let sliderDot1 = document.getElementById('slider-r1');
   let sliderDot2 = document.getElementById('slider-r2');
   let sliderDot3 = document.getElementById('slider-r3');
   leftButton.addEventListener('click', onClick);
   rightButton.addEventListener('click', onClick);
   let sliderElements = [slider_el1, slider_el2, slider_el3];
   sliderElements[0].classList.add('visibleElement');
   sliderDot1.checked=true;
   function onClick(e){      
      switch (e.target.id) {
         case 'leftButton':
            leftClick();
            break;
         case 'rightButton':
            rightClick();
            break;
      };
      function leftClick() {
         switch (checkingClass()) {
            case 'slider-el1':
               slider_el1.classList.remove('visibleElement');
               slider_el3.classList.add('visibleElement');
               sliderDot1.checked=false;
               sliderDot3.checked=true;
               break;
            case 'slider-el2':
               slider_el2.classList.remove('visibleElement');
               slider_el1.classList.add('visibleElement');
               sliderDot2.checked=false;
               sliderDot1.checked=true;
               break;
            case 'slider-el3':
               slider_el3.classList.remove('visibleElement');
               slider_el2.classList.add('visibleElement');
               sliderDot3.checked=false;
               sliderDot2.checked=true;
               break;
         };
      };
      function rightClick() {
         switch (checkingClass()) {
            case 'slider-el1':
               slider_el1.classList.remove('visibleElement');
               slider_el2.classList.add('visibleElement');
               sliderDot1.checked=false;
               sliderDot2.checked=true;
               break;
            case 'slider-el2':
               slider_el2.classList.remove('visibleElement');
               slider_el3.classList.add('visibleElement');
               sliderDot2.checked=false;
               sliderDot3.checked=true;
               break;
            case 'slider-el3':
               slider_el3.classList.remove('visibleElement');
               slider_el1.classList.add('visibleElement');
               sliderDot3.checked=false;
               sliderDot1.checked=true;
               break;
         };
      };
      function checkingClass(){
         for (let block of sliderElements) {
            if (block.classList.contains('visibleElement')){
               return block.id;
            };
         };
      };
   };
};