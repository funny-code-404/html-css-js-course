// TODO
const todoItems = document.getElementById('todo-items');
const btnTodo = document.getElementById('todo-submit');
const btnAdd = document.getElementById('todo-add');
const review = document.getElementById('review');
const email = document.getElementById('email');
const name = document.getElementById('name');

function clear() {
    review.value = "";
    email.value = "";
    name.value = "";
}

function add(e) {
    e.preventDefault();
    const div = document.createElement('div');
    const closeDiv = document.createElement('button');
    closeDiv.classList.add('closeVisible');

    div.classList.add('item');
    closeDiv.innerHTML = 'Delete';

    const count = document.querySelectorAll('.item').length;
    div.innerHTML = '<div>Name: ' + name.value  + '</div>Email: ' + '<div>' + email.value + '</div>Review: ' + '<div>' + review.value  + '</div>';


    div.id = `id${count}`;
    closeDiv.id = `close${count}`

    todoItems.append(div);
    div.append(closeDiv);


    for (let i = 0; i <= count; i++) {
        let els = document.querySelectorAll(".item")[i];
        let els2 = document.querySelectorAll(".closeVisible")[i];
        els2.addEventListener('click', () => {
            els.remove();

        })
    }

};

btnAdd.addEventListener('click', add);

btnTodo.addEventListener('click', (e) => {
    e.preventDefault();

    // _______________________POST
    const url = 'https://quiet-spire-94328.herokuapp.com/reviews';
    const j = {
        email: email.value,
        id: "",
        name: name.value,
        review: review.value
    };

    fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(j) // Упаковка

        }).then(response => response.json()) // Ответ с сервера переводится в JSON
        .then(res => console.log(res))
        .catch(function (err) {

        });


    // _______________________GET
    async function getData(url) {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    }

    getData(url)
        .then((data) => renderList(data));

    function renderList(data) {
        let obj = data;
        for (key in obj) {
            console.log(obj[key]);
        }
    }
    clear();
})