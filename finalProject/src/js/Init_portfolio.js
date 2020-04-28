class Init_portfolio {
   constructor(cloud_elem) {
      this.all_projects = document.querySelector(`#nav_all-projects`);
      this.wip = document.querySelector(`#nav_wip`);
      this.collections = document.querySelector(`#nav_collections`);
      this.done = document.querySelector(`#nav_done`);
      this.cloud_elem = cloud_elem;
      this.inner_elem = document.querySelectorAll(`.main_your-pictures-block_header-image`);
      this.parrent_elem = document.querySelector(`.main_your-pictures-block_header`);
      this.loader = `loader_block`;
      this.opacity = `opacity_block`;
      this.last_block;
      this.current_block;
   }
   addListner() {
      this.all_projects.addEventListener(`click`, (e) => { this.open_projects(1, e.target) });
      this.wip.addEventListener(`click`, (e) => { this.open_projects(2, e.target) });
      this.collections.addEventListener(`click`, (e) => { this.open_projects(3, e.target) });
      this.done.addEventListener(`click`, (e) => { this.open_projects(4, e.target) });
      this.all_projects.classList.add(`main_nav-portfolio_selected`);
      this.current_block = this.all_projects;
      this.open_projects(1, this.all_projects);
   }
   open_projects(num, e) {
      this.spinner();
      setTimeout(() => { this.inner_content(num) }, 3000)
      this.change_class(e);
   }
   spinner() {
      this.parrent_elem.classList.toggle(this.loader);
      this.inner_elem.forEach(element => {
         element.classList.toggle(this.opacity);
      })
   }
   change_class(e) {
      this.last_block = this.current_block;
      this.current_block = e;
      this.last_block.classList.toggle(`main_nav-portfolio_selected`);
      this.current_block.classList.toggle(`main_nav-portfolio_selected`);
   }
   inner_content(num) {
      let start_elem = num * 7 - 7;
      for (let i = 0; i < 7; start_elem++, i++) {
         this.inner_elem[i].innerHTML = `<img src="${this.cloud_elem[start_elem].link}"/>`;
      }
      this.spinner();
   }
}

export default Init_portfolio;