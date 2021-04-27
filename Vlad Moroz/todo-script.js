const data = document.querySelector('input[name=todo]');
const button = document.getElementById('addButton');
const ol = document.getElementById('todoList');
const deleteBtn = document.querySelectorAll('.todoDel');
const clear = document.querySelector('.clear');
const save = document.querySelector('.save');

button.addEventListener('click', () => {
    ol.insertAdjacentHTML('beforeEnd', `<li><span class='todoText'> ${data.value} </span> <span class='todoDel'>&#10008;</span></li> `);
    data.value = "";
    const deleteBtn = document.querySelectorAll('.todoDel');
    deleteTodo(deleteBtn);
});


function deleteTodo(element) {
    element.forEach(item => item.addEventListener(
        'click', 
        (e) => {
            item.parentElement.remove();
            e.stopPropagation();
    }));
}

save.addEventListener('click', () => {
    console.log('Saved')
    localStorage.setItem('todo', ol.innerHTML);
});

clear.addEventListener('click', () => {
    ol.innerHTML = '';
    localStorage.removeItem('todo', ol.innerHTML);
});

function loadTodos() {
    const data = localStorage.getItem("todo");
    if (data) {
        ol.innerHTML = data;
    }
        const deleteBtn = document.querySelectorAll('.todoDel');
        deleteTodo(deleteBtn);
    
}

loadTodos();