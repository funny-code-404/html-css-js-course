class OurServiceLive {
   constructor(options){
      this.openText=`KNOW MORE <i class="fa fa-long-arrow-right" aria-hidden="true"></i>`;
      this.closeText=`<i class="fa fa-times" aria-hidden="true">`;
      this.text=document.querySelectorAll(`.our-services_block-text`);
      this.textFullVersion=[];
      this.textForRedaction=[];
      this.buttonClick=document.getElementsByClassName(`our-services_block-button`);
      this.arrayButtons=[];
      this.maxSizeText=111;
   }
   startetPageFunction(){
      for(let button of this.buttonClick){
         button.innerHTML=this.openText;
      }
      this.text.forEach(el=>{
         this.textFullVersion.push(el.innerHTML);
         let text = el.innerHTML;
         text=text.substr(0, this.maxSizeText);
         el.innerHTML=text+`..`;
         this.textForRedaction.push(el.innerHTML);
      })
      this.getListnerForButton();
   };
   getListnerForButton(){
      for(let button of this.buttonClick){
         button.addEventListener(`click`, (e)=>{
            let parentElement = e.currentTarget.parentElement;
            let button = e.currentTarget;
            if(parentElement.classList.contains(`our-services_block-open`)){
               this.removeClasses(parentElement, button);
            } else {
               this.addBlockClasses(parentElement, button);
            };
         });
      };
   };
   addBlockClasses(parent, but_el){
      let buttonClick = Array.prototype.slice.call(this.buttonClick);
      parent.classList.add(`our-services_block-open`);
      parent.childNodes[1].classList.add(`our-services_block-title-open`);
      parent.childNodes[3].classList.add(`our-services_block-text-open`);
      parent.childNodes[3].innerHTML=this.textFullVersion[buttonClick.indexOf(but_el)];
      parent.childNodes[5].innerHTML=this.closeText;
      parent.childNodes[5].classList.add(`our-services_block-button-open`);
   }
   removeClasses(parent, but_el){
      let buttonClick = Array.prototype.slice.call(this.buttonClick);
      parent.classList.remove(`our-services_block-open`);
      parent.childNodes[1].classList.remove(`our-services_block-title-open`);
      parent.childNodes[3].classList.remove(`our-services_block-text-open`);
      parent.childNodes[3].innerHTML=this.textForRedaction[buttonClick.indexOf(but_el)];
      parent.childNodes[5].innerHTML=this.openText;
      parent.childNodes[5].classList.remove(`our-services_block-button-open`);
   }
}

export default OurServiceLive;