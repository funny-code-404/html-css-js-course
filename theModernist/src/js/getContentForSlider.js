function ContentForSlider(){
   const sliderTitle = document.getElementsByClassName(`sliderItem_title`);
   const sliderText = document.getElementsByClassName(`sliderItem_text`);
   const sliderLink = document.getElementsByClassName(`sliderItem_link`);
   const sliderPicture = document.getElementsByClassName(`itemPicture`);

   const url = `https://google.com`;
   const config  = {
      method: `GET`
   };

   getContentSlider(url, config);
   function getContentSlider(url, config){
      fetch(url, config)
         .then((res)=>{
            return res.json();
         })
         .then((res)=>{
            innerContentToSlider(res);
         });
   };

   function innerContentToSlider(res){
      let numberSlide = 0;
      for (let content of res){
         sliderTitle[numberSlide].innerHTML=content.title;
         sliderText[numberSlide].innerHTML=content.text;
         sliderLink[numberSlide].setAttribute(`href`,`${content.link}`);
         sliderPicture[numberSlide].setAttribute(`style`, `background-image: url(${content.image})`);
         numberSlide++;
      };
   };
};

export default ContentForSlider;