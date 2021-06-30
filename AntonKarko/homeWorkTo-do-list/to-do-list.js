const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];

function render (todos) {
    ul.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li');
        li.classList.add('li');
        const textSpan = document.createElement('span');
        textSpan.classList.add('todo-text');
        textSpan.innerHTML = todos[i].value;

        const buttonClose = document.createElement('button');
        textSpan.appendChild(buttonClose);
        buttonClose.classList.add('close');
        buttonClose.id = todos[i].id;

        buttonClose.addEventListener('click', function (e) {
            deleteTodo(e.target.id);
        })

        ul.appendChild(li).append(textSpan);
    };
}

function createTodo() {
    const todo = {
        id: todos.length + 1,
        value: input.value,
    }

    todos.push(todo);

    render(todos);
}

function deleteTodo(id) {
    todos = todos.filter((item) => item.id !== Number(id));
    render(todos);
}

input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        createTodo();
        text.value = '';
    }
});