class Init_blog_post {
   constructor(cloud_elem){
      this.cloud_elem = cloud_elem;
      this.parrent_elem = document.querySelector(`#main_blog-section_post-section`);
      this.nav_button_prev = document.querySelectorAll(`#main_blog-section_post-section_nav-btn`)[0];
      this.nav_button_next = document.querySelectorAll(`#main_blog-section_post-section_nav-btn`)[document.querySelectorAll(`#main_blog-section_post-section_nav-btn`).length-1];
      this.buttons = document.querySelectorAll(`#main_blog-section_post-section_nav-btn`);
      this.current_page = 1;
      this.prev_page = 1;
      this.i = 0;
   }
   loaderAdd(){
      this.class_editor();
      this.add_listner();
   }
   class_editor(){
      this.parrent_elem.classList.toggle(this.loader);
   }
   class_buttons(i){
      this.prev_page=this.current_page;
      this.current_page=i;
      this.buttons[this.prev_page].classList.toggle(`main_blog-section_post-section_nav-btn-select`);
      this.buttons[this.current_page].classList.toggle(`main_blog-section_post-section_nav-btn-select`);
   }
   add_listner(){
      this.buttons.forEach((e, i)=>{
         if(i==0||i==this.buttons.length-1){
            
         } else{
            e.addEventListener(`click`, ()=>{this.load_element(i)})
         }
      })
      this.nav_button_prev.addEventListener(`click`, ()=>{this.move_button(-1)});
      this.nav_button_next.addEventListener(`click`, ()=>{this.move_button(1)});
      this.load_element(1);
   }
   load_element(i){
      this.class_buttons(i);
      let num_page = i*5-5;
      this.parrent_elem.innerHTML='';
      setTimeout(()=>{
         for(let i=0; i<6; num_page++, i++){
            let build_elem = this.create_element(this.cloud_elem[num_page]);
            this.parrent_elem.prepend(build_elem);
         }
      }, 1000)
   }
   create_element(elem){
      const build = document.createElement(`div`);
      const header = document.createElement(`div`);
      const header_avatar = document.createElement(`div`);
      const header_author = document.createElement(`div`);
      const main = document.createElement(`div`);
      const main_picture = document.createElement(`div`);
      const main_title = document.createElement(`h3`);
      const main_text = document.createElement(`p`)
      const footer = document.createElement(`div`);
      const footer_continue=`<button class="main_blog-section_post-footer_btn">Continue Reading</button>`;
      const footer_like=`<button class="main_blog-section_post-footer_btn">Like this</button>`;
      const footer_share=`<button class="main_blog-section_post-footer_btn">Share this</button>`;
      header_avatar.innerHTML=`<img src="${elem.avatar}"/>`;
      header_author.innerHTML+=`<article>${elem.author}</article>`;
      header_author.innerHTML+=`<span>${elem.date}</span>`;
      main_picture.innerHTML=`<img src="${elem.image}"/>`;
      main_title.innerHTML=elem.title;
      main_text.innerHTML=elem.text;
      footer.innerHTML+=footer_continue;
      footer.innerHTML+=footer_like;
      footer.innerHTML+=footer_share;
      build.className=`main_blog-section_post`;
      header.className=`main_blog-section_post-header`;
      header_avatar.className=`main_blog-section_post-header_avatar`;
      header_author.className=`main_blog-section_post-header_author`;
      main.className=`main_blog-section_post-main`;
      main_picture.className=`main_blog-section_post-main_picture`;
      main_title.className=`main_blog-section_post-main_title`;
      main_text.className=`main_blog-section_post-main_text`;
      footer.className=`main_blog-section_post-footer`;
      header.appendChild(header_avatar);
      header.appendChild(header_author);
      main.appendChild(main_picture);
      main.appendChild(main_title);
      main.appendChild(main_text);
      build.appendChild(header);
      build.appendChild(main);
      build.appendChild(footer);
      return build
   }
   move_button(i){
      if (this.current_page+i<0) {
         this.load_element(5);
      } else if(this.current_page+i>5) {
         this.load_element(1);
      } else{
         this.load_element(this.current_page+i);
      }
   }
}

export default Init_blog_post;