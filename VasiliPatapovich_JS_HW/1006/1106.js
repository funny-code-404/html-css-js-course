//1 Задания - Как найти
// Таблицу с id="table".
let elem = document.getElementById('table');


  alert(elem.innerHTML);     //скрипт вызыват таблицу 

  //или

document.getElementById('table')



// Все элементы td внутри этой таблицы.

document.querySelectorAll('table td')


// Последний td в этой таблице.
document.querySelectorAll('tr> td:last-child');


// Форму form с именем name="search".
document.getElementsByName('search')

// Первый input в этой форме.
form.getElementsByTagName('input')[0]
console.log(input);
// Последний input в этой форме.
let input = form.querySelectorAll('input') // найти все input
inputs[input.length-1] // взять последний



//2 Поиск элементов
// Задание
// - сверстать данный
// элемент
// - задать выделенным
// элементам цвет фона
// (любой)

let redBod3 = document.getElementById('redb3');
redBod3.style.borderColor = 'red';



//3 Поиск элементов
// Задание
// - сверстать данный
// элемент
// - задать выделенным
// элементам цвет фона
// (любой)
// ____________________________
// elem.style.backgroundColor = 'red';

let redBod0 = document.getElementById('redb0');
redBod0.style.borderColor = 'red';

let redBod1 = document.getElementById('redb1');
redBod1.style.borderColor = 'red';

let redBod2 = document.getElementById('redb2');
redBod2.style.borderColor = 'red';