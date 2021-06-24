const input = document.querySelector('input');
const ul = document.querySelector('ul');

function createTodo() {
    const li = document.createElement('li');
    li.classList.add('li');
    // li.id = 'data-id';
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

let button = document.getElementsByClassName('close');



// function removebutton() {
    let buttons = [...button];
    for ( let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            this.parentNode.parentNode.remove();
            // this.remove('data-id');
        })
    };
    // li.remove();
// };

// data-id.forEach(button => button.addEventListener('click', removeLi));

// let li = document.getElementById('data-id');
// function removeLi(element) {
//     let lis = [...li];
//     for ( let i = 0; i < lis.length; i++) {
//         lis[i].addEventListener('click', function () {
//             this.remove();
//         })
//     };
// }

let button = document.getElementsByClassName('close');

const buttons = [];
buttons.push(button);
    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            this.parentNode.parentNode.remove();
        })
    };
