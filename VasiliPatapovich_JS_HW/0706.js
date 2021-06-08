
// Домашнее задание:
// 1. используя урл https://jsonplaceholder.typicode.com/todos запросить данные с сервера и вывести в консоль;

GET "https://jsonplaceholder.typicode.com/todos"

// 2. запросить данные 2-мя способами XMLHttpRequest и fetch

var xhr = new XMLHttpRequest(); // создаем переменную
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

xhr.onreadystatechange = function () { // метод
   if (xhr.readyState === 4) { // запрос окончен и ответ готов
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send(); // отсылаем



let promise = fetch(let promise = fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "GET", // метод запроса
  headers: {
    
    "Content-Type": "text/plain;charset=UTF-8"
  },

  // все возможные опции для fetch с соответствующими значениями по умолчанию
};







// 3. почитать на сайте, как можно создавать свои элементы на этом сервере и создать несколько своих review/todo (под своим именем, метод POST)


var xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Length", "0");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {  // запрос окончен и ответ готов
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

// 4.  вывести запрошенные данные не в консоль, а создать маркированный список, который при ответе с сервера заполняется/создаетмя с данными




// Реализовать функцию drawCalendar, которая
// принимает три аргумента - год, месяц,
// htmlElement и выводит в этот элемент
// календарь на месяц (дни недели начинаются
// с понедельника ).

function createCalendar(htmlElement, year, month) {
    
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // htmlElement.innerHTML = table;   - // позволяет получить HTML-содержимое элемента в виде строки, но не работает
  }

  function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

  //createCalendar(htmlElement, 2021, 6); // ошибка

  createCalendar( 2021, 6);
//  Корректное задание про кэш данных: создать функцию, которая принимает параметром url.
//  При наличии данных в объекте кэше под ключом, совпадающим с урлом - вернуть их, 
//  а если такого ключа в объекте нет - запросить данные по данному урлу отдельной 
//  функцией (пока написать пустую функцию для этого), и сохранить полученные данные
//   под данным ключом