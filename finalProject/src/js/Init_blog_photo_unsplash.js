class Init_blog_photo_unsplash {
   constructor(cloud_elem) {
      this.cloud_elem = cloud_elem;
      this.parrent_elem = document.querySelector(`.photo-from-unsplash_container`);
      this.inner_elem = document.querySelectorAll(`.photo-from-unsplash_container-item`);
      this.loader = `loader_block`;
      this.opacity = `opacity_block`;
      this.i = 0;
   }
   loaderAdd() {
      this.class_editor();
      setTimeout(() => { this.addElem() }, 3000);
   }
   addElem() {
      this.cloud_elem.forEach(obg => {
         let img = document.createElement(`img`);
         img.setAttribute(`src`, obg.link);
         this.inner_elem[this.i].appendChild(img);
         this.i++;
      })
      this.class_editor();
   }
   class_editor(){
      this.parrent_elem.classList.toggle(this.loader);
      this.inner_elem.forEach(element => {
         element.classList.toggle(this.opacity);
      })
   }
}

export default Init_blog_photo_unsplash;