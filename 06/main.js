window.onload=function(){
  let name=document.getElementById('nameUser');
  let email=document.getElementById('emailUser');
  let password=document.getElementById('passwordUser');
  let gender=document.getElementById('radio-gender');
  let county=document.getElementById('country');
  let policity=document.getElementById('policity');
  let submit=document.getElementById('submit');
  let reset=document.getElementById('reset');
  let outputName=document.getElementById('outputName');
  let outputEmail=document.getElementById('outputEmail');
  let outputPassword=document.getElementById('outputPassword');
  let outputCounty=document.getElementById('outputCounty');
  let outputGender=document.getElementById('outputGender');
  

  function policitycheck(){
    if(policity==false){
      submit.setAttribute("disabled","disabled")
    } else {
      submit.removeAttribute("disabled")
    }
  }

  
  function formoutput(){
    outputName.innerHTML="Имя:"+name;
    outputEmail.innerHTML= "Email:"+email;
    outputPassword.innerHTML= "Пароль:"+password;
    outputGender.innerHTML= "Страна:"+county;
    outputCounty.innerHTML= "Пол:"+gender;
    
    

  }
  submit.addEventListener("click",function(e){
    formoutput();
    policitycheck();
    return false;
  })

}