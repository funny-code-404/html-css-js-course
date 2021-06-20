const input = document.querySelector('input');
const ul = document.querySelector('ul');

function createTodo() {
    const li = document.createElement('li');
    li.classList.add('li');
    const textSpan = document.createElement('span');
    textSpan.classList.add('todo-text');
    let textInput = input.value;
    textSpan.append(textInput);
    
    const buttonClose = document.createElement('button');
    textSpan.appendChild(buttonClose);
    buttonClose.classList.add('close');

    textInput = '';

    ul.appendChild(li).append(textSpan,);
}

input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        createTodo();
        text.value = '';
    }
});

let buttons = document.getElementsByClassName('close');
for ( let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        this.parentNode.parentNode.remove();
    })
};
