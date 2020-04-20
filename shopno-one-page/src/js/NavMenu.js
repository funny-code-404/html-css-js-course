class NavMenu {
   constructor(options){
      this.menu_btn = document.getElementById(`menu-button`);
      this.menu_link = document.querySelector('#nav-bar_menu > ul');
      this.site = document.getElementsByTagName(`body`)[0];
   }
   moveSite(){
      this.addListners();
   }
   addListners(){
      this.menu_btn.addEventListener(`click`, ()=>{this.checking()});
      // for(let link of this.menu_link){
      //    link.addEventListener(`click`, ()=>{this.checking()});
      // };
      this.menu_link.addEventListener(`click`, ()=>{this.checking(e)})
   }
   checking(e){
      if(e.target.tagName==('LI')){
         this.site.classList.toggle(`menuOpen`);
      }
   }
}

export default NavMenu;