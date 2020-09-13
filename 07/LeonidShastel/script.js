window.onload = function() {
   //формы
   const name = userInfo.name;
   const email = userInfo.email;
   const pass = userInfo.pass;
   const gender = userInfo.gender;
   const country = userInfo.country;
   const checkAgree = userInfo.agreement;
   const formSend = userInfo.send;

   //переменные для отправки
   let nameSend;
   let emailSend;
   let passSend;
   let genderSend;

   //id span html
   const formName = document.getElementById(`formName`);
   const formEmail = document.getElementById(`formEmail`);
   const formPass = document.getElementById(`formPass`);
   const formGender = document.getElementById(`formGender`);
   const formCountry = document.getElementById(`formCountry`);

   //обработчики и их функции
   name.addEventListener(`input`, onInput);
   email.addEventListener(`input`, onInput);
   pass.addEventListener(`input`, onInput);
   function onInput(e){
      if(e.target.name===`name`) {
         nameSend=e.target.value;
      } else if (e.target.name===`email`) {
         emailSend=e.target.value;
      } else if (e.target.name===`pass`) {
         passSend=e.target.value;
      }
   };
   
   //отправка
   formSend.addEventListener(`click`, onClick);
   function onClick(send){
      formName.innerHTML=nameSend;
      formEmail.innerHTML=emailSend;
      formPass.innerHTML=passSend;
      function valButt() {
         for (let i=0; i<gender.length; i++) {
            if (gender[i].checked===true) {
               genderSend=gender[i].value;
            };
         };
      };
      valButt();
      formGender.innerHTML=genderSend;
      formCountry.innerHTML=country.value;
      if(!checkAgree.checked) {
         alert(`Не приняли соглашение!`);
         return
      }
      send.preventDefault();
   }
};