// создать функцию, которая принимает параметром url. При наличии данных в объекте кэше под ключом, совпадающим с урлом - вернуть их, а если такого ключа в объекте нет - запросить данные по данному урлу отдельной функцией (пока написать пустую функцию для этого), и сохранить полученные данные под данным ключом

let obj = {
    name: "Anton",
    age: 33,
    status,
    write: function () {
        for (let value in Object.values(obj)) {
            if (obj[value] == undefined) {
                console.log(Object.values(obj));
            }
        }console.log(value);
        // Это не сделано еще
for (let [key, value] in Object.entries(obj)) {
            if (obj.hasOwnProperty() == true) {
                Object.values(obj) = 'nowValue';
            };
        }
    },

    NumberOfProperties: function() {
       return Object.keys(obj).length;
    },
};


console.log(obj);

obj.NumberOfProperties();

// Реализовать функцию drawCalendar, которая принимает три аргумента - год, месяц, htmlElement и выводит в этот элемент календарь на месяц (дни недели начинаются с понеджельника).


function createCalendar(htmlElement, year, month) {

    let mon = month - 1; 
    let d = new Date(year, mon);

    let table = '<table><tr><th>Mondey</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    htmlElement.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }

  createCalendar(calendar, 2021, 6);