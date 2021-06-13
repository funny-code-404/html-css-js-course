// Поиск элементов Получить: тэг с Users; тэг с Sam; тэг Jane.

const div = document.body.firstElementChild;
const sam = document.body.lastElementChild.lastElementChild;
const jane = document.body.lastElementChild.firstElementChild;

// поиск элементов: -сверстать данный элемент, - задать выделенным элементам цвет фона (любой)

document.body.children[1].firstElementChild.style.backgroundColor = 'pink';

// Поиск элементов: - сверстать данный элемент; - задать выделенным элементам цвет фона (любой)

document.body.children[1].firstElementChild.style.backgroundColor = 'green';
document.body.children[1].childNodes[9].style.backgroundColor = 'green'; // не понял как он сработал (но сработало)
document.body.children[1].lastElementChild.style.backgroundColor = 'green';

// Как найти: - таблицу с id = 'table'; - все элементы td внутри этой таблицы; - последний td в этой таблице; - форму from с именем name = 'search'; - первый input в этой форме; -  последний input в этой форме.

const table = document.getElementById('table');
const td = table.getElementsByTagName('td');
td.lastElementChild;
const search = document.getElementsByTagName('search');
const input = search.getElementsByTagName('input');
input.firstElementChild;
input.lastElementChild;

// Покрасить внешние ссылки в красный цвет

const a = document.getElementsByTagName('a');

for (let i = 0; i < a.length; i++) {
    if (a[i].href) {
        a[i].style.color = 'red';
    }
};

// Напишите функцию showNotification(options), которая создает уведомление: <div class = 'notification'> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

function showNotification (html, className) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    if (className) {
        notification.classList.add(className);
    }
    notification.innerHTML = html;
    document.body.append(notification);
    
    setTimeout(() => notification.remove(), 1500);
};

showNotification('Hello ', "hello");
