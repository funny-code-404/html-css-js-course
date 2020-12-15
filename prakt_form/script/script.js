const nameUser = document.forms[0].nameUser;
const password = document.forms[0].password;
const email = document.forms[0].email;
const city = document.forms[0].city;
const sendButton = document.getElementById('button-send');

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
        city: city.value
    }
    
    console.log(user);
}

sendButton.addEventListener('click', handleClick)