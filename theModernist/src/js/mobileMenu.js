function MobileMenu(){
   const menuButton = document.getElementById(`menuButton`);
   menuButton.addEventListener(`click`, menuChecking);
   const mobileMenu = document.getElementById(`mobileMenu`);
   mobileMenu.addEventListener(`click`, menuChecking);
   function menuChecking(){
      mobileMenu.classList.toggle(`nav__menu_mobile-vision`);
   };
};

export default MobileMenu;