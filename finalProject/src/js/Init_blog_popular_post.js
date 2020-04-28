class Init_blog_popular_post {
   constructor(cloud_elem) {
      this.cloud_elem = cloud_elem;
      this.parrent_elem = document.querySelector(`.main_blog-section_post-settings_block-container`);
      this.inner_elem = document.querySelectorAll(`.main_blog-section_post-settings_block-content`);
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
         let block_img = this.inner_elem[this.i].querySelector(`.main_blog-section_post-settings_block-content_image`);
         let title = this.inner_elem[this.i].getElementsByTagName(`ARTICLE`)[0];
         let date = this.inner_elem[this.i].getElementsByTagName(`SPAN`)[0];
         block_img.innerHTML = `<img src="${obg.img}"/>`
         title.innerHTML = obg.title;
         date.innerHTML = obg.date;
         this.i++;
      })
      this.class_editor();
   }
   class_editor(){
      this.parrent_elem.classList.toggle(this.loader);
      this.inner_elem.forEach(element => {
         element.classList.toggle(this.opacity);
         let text = element.querySelector(`.main_blog-section_post-settings_block-content_text`);
         text.getAttribute(`style`) ? text.removeAttribute(`style`) : text.setAttribute(`style`, `padding: 8% 0`);
      })
   }
}

export default Init_blog_popular_post;