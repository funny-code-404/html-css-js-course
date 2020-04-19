class NavMenu {
   constructor(options){
      this.menu_btn = document.getElementById(`menu-button`);
      this.menu_link = document.getElementsByClassName(`nav-bar_menu-link`);
      this.site = document.getElementsByTagName(`body`)[0];
   }
   moveSite(){
      this.addListners();
   }
   addListners(){
      this.menu_btn.addEventListener(`click`, ()=>{this.checking()});
      for(let link of this.menu_link){
         link.addEventListener(`click`, ()=>{this.checking()});
      };
      for(let btn of this.menu_btn){
         btn.addEventListener(`click`, (e)=>(e.preventDefault()))
      }
   }
   checking(){
      this.site.classList.toggle(`menuOpen`);
   }
}

export default NavMenu;