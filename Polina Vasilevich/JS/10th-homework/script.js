const name = document.forms[0].name;
const password = document.forms[0].password;
const email = document.forms[0].email;
const select = document.forms[0].select;

const send = document.getElementById("send");
const reset = document.getElementById("resetButton");

const firstCheckBox = document.forms[1].option1;
const secondCheckBox = document.forms[1].option2;
const thirdCheckBox = document.forms[1].option3;

const comment = document.forms[1].comment;

let data = {};

function returnNativeColorInput() {
  const inputs = document.forms[0].querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.borderColor = "black";
  }
}

function changeColorInput(fieldNAme) {
  fieldNAme.style.borderColor = "red";
}

const handleSendClick = (e) => {
  e.preventDefault();
  returnNativeColorInput();

  if (name.value && password.value && email.value) {
    data[name.name] = name.value;
    data[password.name] = password.value;
    data[email.name] = email.value;

    data[firstCheckBox.name] = firstCheckBox.checked;
    data[secondCheckBox.name] = secondCheckBox.checked;
    data[thirdCheckBox.name] = thirdCheckBox.checked;

    data[comment.name] = comment.value;
  } else {
    alert("Fill in required fields");
    if (!name.value) {
      changeColorInput(name);
    }

    if (!password.value) {
      changeColorInput(password);
    }

    if (!email.value) {
      changeColorInput(email);
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
  const checkboxs = document.forms[1].querySelectorAll("input");
  for (let i = 0; i < checkboxs.length; i++) {
    checkboxs[i].checked = false;
  }
  comment.value = "";

  data = {};

  returnNativeColorInput();
};

select.addEventListener("change", handleSelectChange);
send.addEventListener("click", handleSendClick);
reset.addEventListener("click", handleResetClick);

comment.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
  }
});
