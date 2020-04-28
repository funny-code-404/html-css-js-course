class Init_blog_popular_tags {
   constructor(cloud_elem) {
      this.cloud_elem = cloud_elem;
      this.parrent_elem = document.querySelector(`.main_blog-section_trending-tags_container`);
   }
   loaderAdd() {
      setTimeout(() => { this.addElem() }, 3000);
   }
   addElem() {
      this.cloud_elem.forEach(obg => {
         this.parrent_elem.innerHTML+=`<span>${obg.attr}</span`;
      })
   }
}

export default Init_blog_popular_tags;