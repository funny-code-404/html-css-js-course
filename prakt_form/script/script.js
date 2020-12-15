const nameUser = document.forms[0].nameUser;
const password = document.forms[0].password;
const email = document.forms[0].email;
const city = document.forms[0].city;
const sendButton = document.getElementById('button-send');
const checkbox1 = document.forms[1].check1;
const checkbox2 = document.forms[1].check2;
const checkbox3 = document.forms[1].check3;
const anyComment = document.forms[1].comment;
const resetButton = document.getElementById('button-reset');

const handleClick = (e) => {
    e.preventDefault();
        // console.dir(nameUser.value);
        // console.dir(password.value);
        // console.dir(email.value);
        // console.dir(city.value);
    const user = {
        name: nameUser.value,
        password: password.value,
        email: email.value,
        city: city.value,
        check1: checkbox1.checked,
        check2: checkbox2.checked,
        check3: checkbox3.checked,
        comment: anyComment.value, 
    }

    const objectUser = JSON.stringify(user); 
    //const parsedUser = JSON.parse(objectUser);
    console.log(user);
    console.log(objectUser);
}

const handleClickReset = (e) => {
    e.preventDefault();
    nameUser.value = " ";
    password.value = "";
    email.value = " ";
    city.value = " ";
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    anyComment.value = "";
}

sendButton.addEventListener('click', handleClick);
resetButton.addEventListener('click', handleClickReset)