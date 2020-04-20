function ServiceBlock(){
      const serviceBlocks = document.getElementsByClassName('serviceBlock__item');
      serviceBlocks[0].classList.add('serviceBlock__item-click');
      for(let i = 0; i<serviceBlocks.length; i++){
         serviceBlocks[i].addEventListener('click', setLatestWorkContent);
      };
      function setLatestWorkContent(e){
         for(let i=0; i<serviceBlocks.length; i++){
         if(serviceBlocks[i].classList.contains('serviceBlock__item-click')){
            serviceBlocks[i].classList.remove('serviceBlock__item-click');
            break
            };
         };
         e.currentTarget.classList.add('serviceBlock__item-click');
      };


   const latestWorkLink = document.getElementsByClassName('latestWork_item_link');
   const latestWorkPictures = document.getElementsByClassName('latestWork_item_pictures');
   const lateseWorkTitle = document.getElementsByClassName('latestWork_item_title');
   const urlLastWork = `https://google.com`;
   const configLastWork  = {
      method: `GET`
   };
   getLatestWork(urlLastWork, configLastWork);
   function getLatestWork(url, config){
      fetch(url, config)
      .then((res)=>{
         return res.json();
      })
      .then((res)=>{changingButtonsWithInformation(res)});
   };
   function changingButtonsWithInformation(jsonWorks){
      const serviceBlocks = document.getElementsByClassName('serviceBlock__item');
      serviceBlocks[0].classList.add('serviceBlock__item-click');
      for(let i = 0; i<serviceBlocks.length; i++){
         serviceBlocks[i].addEventListener('click', setLatestWorkContent);
      };
      function setLatestWorkContent(e){
         for(let i=0; i<serviceBlocks.length; i++){
            if(serviceBlocks[i].classList.contains('serviceBlock__item-click')){
               serviceBlocks[i].classList.remove('serviceBlock__item-click');
               break
            };
         };
         e.currentTarget.classList.add('serviceBlock__item-click');
         checkingLatestwork();
      };

      function checkingLatestwork(){
         for (let i=0; i<serviceBlocks.length; i++){
            if (serviceBlocks.classList.contains('serviceBlock__item-click')){
               addBlocks(i);
               break
            };
         };
      };
      function addBlocks(numberBlock){
         let numberWorkBlock = 0;
         for (let content of jsonWorks[numberBlock]){
            latestWorkLink[numberWorkBlock].setAttribute(`style`, `href: ${content.link}`);
            latestWorkPictures[numberWorkBlock].setAttribute(`style`, `background-image: url(${content.image})`);
            lateseWorkTitle[numberWorkBlock].innerHTML=content.title;
            numberWorkBlock++;
         };
      };
   };
};



export default ServiceBlock;