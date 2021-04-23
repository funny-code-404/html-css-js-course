const button = document.createElement('button');
button.innerHTML = 'ClickH1';
let divBtn = document.getElementById('btns');

const foo = function () {
    const b = document.createElement('h1');
    b.innerHTML = 'Hello';
    divBtn.append(b);
    button.removeEventListener("click", foo);

};

const aa = button.addEventListener('click', foo);
divBtn.append(button);


const obj = {
    username: '',
    useremail: '',
    userpass: ''
};

function onInput(e) {
    if (e.target.id === 'useremail' && e.target.value.indexOf('@') !== -1) {
        obj[e.target.id] = e.target.value;
    }
    if (e.target.id === 'username' && e.target.value.length > 5) {
        obj[e.target.id] = e.target.value;
    }
    if (e.target.id === 'userpass' && e.target.value.length > 5) {
        obj[e.target.id] = e.target.value;
    }


    console.dir(e.target);

};

username.addEventListener('change', onInput);
useremail.addEventListener('change', onInput);
userpass.addEventListener('change', onInput);

sub.addEventListener('click', () => console.log(obj));


// КЛАД
document.getElementById('picture').onclick = function (e) {
    if (e.offsetX > 233 && e.offsetX < 253 && e.offsetY > 147 && e.offsetY < 167) {
        console.log('Ты нашел клад!');
    } else if (e.offsetX < 232) {
        console.log('Правее');
    } else if (e.offsetX > 254) {
        console.log('Левее');
    } else if (e.offsetY < 146) {
        console.log('Ниже');
    } else if (e.offsetY > 168) {
        console.log('Выше');
    }
};


// TODO
const todoItems = document.getElementById('todo-items');
const btnTodo = document.getElementById('todo-submit');
const inputTodo = document.getElementById('todo-input');


function add(e) {
    const div = document.createElement('div');
    const closeDiv = document.createElement('button');
    closeDiv.classList.add('closeVisible');
    div.classList.add('item');
    closeDiv.innerHTML = 'Delete';

    const count = document.querySelectorAll('.item').length;
    div.innerHTML = e.target.value;

    div.id = `id${count}`;
    closeDiv.id = `close${count}`

    todoItems.append(div);
    div.append(closeDiv);

    for (let i = 0; i <= count; i++) {
        let els = document.querySelectorAll(".item")[i];
        let els2 = document.querySelectorAll(".closeVisible")[i];
        els2.addEventListener('click', ()=>{
            els.remove();
        })
    }
};



inputTodo.addEventListener('change', add);


btnTodo.addEventListener('click', (e) => {
    e.preventDefault();
    inputTodo.value = '';
})