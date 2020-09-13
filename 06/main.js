window.onload=function(){
  // элементов
  let nameId=document.getElementById('nameUser');
  let emailId=document.getElementById('emailUser');
  let passwordId=document.getElementById('passwordUser');
  let genderMaleId=document.getElementById('genderMale');
  let countryId=document.getElementById('country');
  let policityId=document.getElementById('policity');
  let submit=document.getElementById('submit');
  let reset=document.getElementById('reset');
  
  // Id выводимых элементов
  let outputName=document.getElementById('outputName');
  let outputEmail=document.getElementById('outputEmail');
  let outputPassword=document.getElementById('outputPassword');
  let outputCounty=document.getElementById('outputCounty');
  let outputGender=document.getElementById('outputGender');
  let outputPolicity=document.getElementById('outputPolicity')
  
  //обработчик событий для затухания кнопки если не стоит checked 
  policityId.addEventListener("change", function(e) {
    if(policityId.checked==false){
      submit.setAttribute("disabled",true);
    } else {
      submit.removeAttribute("disabled");
    }
  });
   //обработчик событий при нажатии на сброс
   reset.addEventListener("click", function(e) {
    submit.setAttribute("disabled", true);
    formreset();
    
  });
  //обработчик событий при нажатии на отправку 
  submit.addEventListener("click",function(e){
    e.preventDefault();
    formoutput();
  });
 
  //фунция для вывода в блок с информацией вводимых данных
  function formoutput(){
    //фунция при которой если один из трёх элементов пустой, программа срабатывать не будет
    if(nameId.value===""||emailId.value===""||passwordId.value===""){
      return false;
    } 
    outputName.innerHTML=nameId.value;
    outputEmail.innerHTML= emailId.value;
    outputPassword.innerHTML= passwordId.value;
    outputGender.innerHTML= genderMaleId.checked? "Муж":"Женский";
    outputCounty.innerHTML= countryId.value; 
    outputPolicity.innerHTML=policityId.checked? "Ознакомлен ✓":"Не ознакомлен";
    
  }
  //фунция для сброса информации в блоке информации выводимой на экран 
  function formreset(){
    outputName.innerHTML="";
    outputEmail.innerHTML= "";
    outputPassword.innerHTML= "";
    outputGender.innerHTML= "";
    outputCounty.innerHTML= ""; 
    outputPolicity.innerHTML="";
  }
}