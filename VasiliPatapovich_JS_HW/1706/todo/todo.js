// Написать базовую реализацию to-do list
// in progress  https://medium.com/@sshambir/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%91%D0%BC-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-to-do-list-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%BC-javascript-9e81a0d60ab
// выбрать элементы input и ul на странице, используя DOM, и затем написать обработчик событий, который будет обрабатывать события нажатия клавиатуры. Все эти действия будут выполняться в функции onPageLoaded
function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul.todos");

    function createTodo() {
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.classList.add("todo-text");
        const newTodo = input.value;
        textSpan.append(newTodo);

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("todo-trash");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        deleteBtn.appendChild(icon);

        ul.appendChild(li).append(textSpan, deleteBtn);
        input.value = "";
        listenDeleteTodo(deleteBtn);
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createTodo();
        }
    });
    ul.addEventListener("click", onClickTodo);
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

// listenDeleteTodo, которая позволит пользователю удалять to-do.

function onPageLoaded() {
    // ...
    function createTodo() {
        // ...
        listenDeleteTodo(deleteBtn);
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }

    // ...
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

// обработчик события нажатия на пункт to-do, зачёркивающий новый пункт как выполненный.
function onPageLoaded() {
    // ...
    function createTodo() {
        // ...
    }

    function onClickTodo(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }

    // ...
    ul.addEventListener("click", onClickTodo);
    // ...
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

// выберем кнопки, с которыми мы будем работать из JavaScript, и добавим им обработчики события click.
function onPageLoaded() {
    const saveButton = document.querySelector("button.save");
    const clearButton = document.querySelector("button.clear");
    const showTipsButton = document.querySelector("button.showTips");
    const closeTipsButton = document.querySelector("a.closeTips");
    const overlay = document.querySelector("#overlay");

    // ..

    saveButton.addEventListener("click", () => {
        localStorage.setItem("todos", ul.innerHTML);
    });
    clearButton.addEventListener("click", () => {
        ul.innerHTML = "";
        localStorage.removeItem('todos', ul.innerHTML);
    });
    showTipsButton.addEventListener("click", () => {
        overlay.style.height = "100%";
    });
    closeTipsButton.addEventListener("click", () => {
        overlay.style.height = "0";
    });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

// функцию для загрузки to-do

function onPageLoaded() {
    // ...

    function listenDeleteTodo(element) {
        // ...
    }

    function loadTodos() {
        const data = localStorage.getItem("todos");
        if (data) {
            ul.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll("span.todo-trash");
        for (const button of deleteButtons) {
            listenDeleteTodo(button);
        }
    }

    // ...

    loadTodos();
}

document.addEventListener("DOMContentLoaded", onPageLoaded);