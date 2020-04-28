class  Init_blog_home {
   constructor(cloud_elem) {
      this.cloud_elem = cloud_elem;
      this.parrent_elem = document.querySelector(`.main_blog`);
      this.inner_elem = document.querySelectorAll(`.main_blog-content-block`);
      this.loader = `loader_block`;
      this.opacity = `opacity_block`;
      this.i = 0;
   }
   loaderAdd() {
      this.parrent_elem.classList.toggle(this.loader);
      setTimeout(() => { this.addElem() }, 3000);
   }
   addElem() {
      this.cloud_elem.forEach(obg => {
         const title = this.inner_elem[this.i].getElementsByTagName(`H4`)[0];
         const text = this.inner_elem[this.i].getElementsByTagName(`ARTICLE`)[0];
         console.log(this.parrent_elem);
         title.innerHTML = obg.title;
         text.innerHTML = obg.text;
         this.i++;
      })
      this.parrent_elem.classList.toggle(this.loader);
   }
}

export default Init_blog_home;