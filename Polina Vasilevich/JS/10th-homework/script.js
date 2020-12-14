const name = document.forms[0].name;
const password = document.forms[0].password;
const email = document.forms[0].email;
const select = document.forms[0].select;

const send = document.getElementById("send");
const reset = document.getElementById("resetButton");

const trialCheckBox = document.forms[0].trial;
const subCheckBox = document.forms[0].subscribe;
const termsCheckBox = document.forms[0].terms;

const comment = document.forms[0].comment;

let data = {};

function setNativeColorInput() {
  const inputs = document.forms[0].querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.borderColor = "black";
    if (inputs[i].getAttribute("type") === "checkbox") {
      inputs[i].style.outlineColor = "transparent";
    }
  }
}

function changeColorInput(fieldName) {
  fieldName.style.borderColor = "red";
}

function addMessageAboutError(fieldName) {
  const error = document.getElementById(`${fieldName.name}Error`);
  error.style.display = "block";
}

function removeMessageAboutError() {
  const error = document.forms[0].getElementsByClassName("error");
  for (let i = 0; i < error.length; i++) {
    error[i].style.display = "none";
  }
}

const handleBlurInput = (e) => {
  if (e.target.value.length) {
    e.target.style.borderColor = "black";
    const error = e.target.nextElementSibling;
    error.style.display = "none";
  }
};

name.addEventListener("blur", handleBlurInput);
password.addEventListener("blur", handleBlurInput);
email.addEventListener("blur", handleBlurInput);

const handleSendClick = (e) => {
  e.preventDefault();
  setNativeColorInput();
  removeMessageAboutError();

  if (name.value && password.value && email.value && termsCheckBox.checked) {
    data[name.name] = name.value;
    data[password.name] = password.value;
    data[email.name] = email.value;
    data[trialCheckBox.name] = trialCheckBox.checked;
    data[subCheckBox.name] = subCheckBox.checked;

    data[termsCheckBox.name] = termsCheckBox.checked;

    if (comment.value) {
      data[comment.name] = comment.value;
    }
  } else {
    if (!name.value) {
      changeColorInput(name);
      addMessageAboutError(name);
    }

    if (!password.value) {
      changeColorInput(password);
      addMessageAboutError(password);
    }

    if (!email.value) {
      changeColorInput(email);
      addMessageAboutError(email);
    }

    if (!termsCheckBox.checked) {
      termsCheckBox.style.outline = "3px solid red";
      addMessageAboutError(termsCheckBox);
    }
  }

  const sendingObject = JSON.stringify(data);
  console.log(sendingObject);
};

const handleSelectChange = (e) => {
  e.preventDefault();
  data[select.name] = e.target.value;
};

const handleResetClick = (e) => {
  e.preventDefault();

  name.value = "";
  password.value = "";
  email.value = "";
  select.value = "City";

  const checkboxs = document.forms[0].querySelectorAll("input");

  for (let i = 0; i < checkboxs.length; i++) {
    checkboxs[i].checked = false;
  }

  comment.value = "";
  data = {};

  setNativeColorInput();
  removeMessageAboutError();
};

select.addEventListener("change", handleSelectChange);
send.addEventListener("click", handleSendClick);
reset.addEventListener("click", handleResetClick);
