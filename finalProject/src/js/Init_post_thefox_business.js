class Init_post_thefox_business {
   constructor(cloud_elem) {
      this.cloud_elem = cloud_elem;
      this.parrent_elem = document.querySelector(`.main_choose-skill-content`);
      this.inner_elem = document.querySelectorAll(`.main_choose-skill_content-information`);
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
         const img = this.inner_elem[this.i].getElementsByTagName(`IMG`)[0];
         const title = this.inner_elem[this.i].getElementsByTagName(`H5`)[0];
         const text = this.inner_elem[this.i].getElementsByTagName(`P`)[0];
         console.log(this.parrent_elem);
         img.setAttribute(`src`, obg.image);
         title.innerHTML = obg.title;
         text.innerHTML = obg.text;
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

export default Init_post_thefox_business;