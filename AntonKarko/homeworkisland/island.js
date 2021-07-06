// Создать кнопку, которая при клике будет создавать тэе h1 с любым сообщением.
/* Закоменчено так как чуть ниже такая же только срабатывает один раз.
function createTag(tag, content, container) {
    const elem = document.createElement(tag);
    elem.innerHTML = content;
    container.appendChild(elem);
}

function handleClick() {
    const container = document.getElementById('container');

    createTag('h1', 'Нажимай на карту! Найди где спрятанно сокровище.', container);
}

const createBlock = document.getElementById('createBlock');

createBlock.addEventListener('click', handleClick);
*/

// Создать кнопку, обработчик которой отработает лишь 1 раз.

function createTag(tag, content, container) {
    const elem = document.createElement(tag);
    elem.innerHTML = content;
    container.appendChild(elem);
}

function handleClick() {
    const container = document.getElementById('container');

    createTag('h1', 'Нажимай на карту! Найди где спрятанно сокровище.', container);
    createBlock.removeEventListener('click', handleClick);
}

const createBlock = document.getElementById('createBlock');

createBlock.addEventListener('click', handleClick);


// Написать базовую реализацию игры "Остров сокровищ"

let minX = Math.ceil(8);
let maxX = Math.floor(807);
let islanX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

let minY = Math.ceil(8);
let maxY = Math.floor(807);
let islanY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

function handleClickGold(island) {
    if((island.pageX >=  islanX - 5 && island.pageX <=  islanX + 5) && (island.pageY >=  islanY - 5 && island.pageY <=  islanY + 5)){
        alert('You win!!!')
    }else {
        if(island.pageX <=  islanX + 5 && island.pageY <=  islanY + 5){
            alert('Клад находится НИЖЕ и ПРАВЕЕ')
        }else if(island.pageX >=  islanX - 5 && island.pageY <=  islanY + 5){
            alert('Клад находится НИЖЕ и ЛЕВЕЕ')
        }else if(island.pageX >=  islanX - 5 && island.pageY >=  islanY - 5){
            alert('Клад находится ВЫШЕ и ЛЕВЕЕ')
        }else if(island.pageX <=  islanX + 5 && island.pageY >=  islanY - 5){
            alert('Клад находится ВЫШЕ и ПРАВЕЕ')
        }
    }
}

island.addEventListener('click', handleClickGold);