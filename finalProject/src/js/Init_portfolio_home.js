class Init_portfolio_home {
   constructor(cloud_elem) {
      this.cloud_elem = cloud_elem;
      this.inner_elem = document.querySelectorAll(`.main_your-pictures-block_header-image`);
      this.parrent_elem = document.querySelector(`.main_your-pictures-block_header`);
      this.loader = `loader_block`;
      this.opacity = `opacity_block`;
      this.i = 0;
   }
   loaderAdd() {
      this.parrent_elem.classList.toggle(this.loader);
      this.inner_elem.forEach(element => {
         element.classList.toggle(this.opacity);
      })
      setTimeout(() => { this.addElem() }, 3000);
   }
   addElem() {
      this.parrent_elem.classList.toggle(this.loader);
      this.inner_elem.forEach(element => {
         element.classList.toggle(this.opacity);
         element.setAttribute(`style`, `background-image: url('${this.cloud_elem[this.i].href}')`);
         this.i++;
      });
   }
}

export default Init_portfolio_home;