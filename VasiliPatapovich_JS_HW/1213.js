// Реализовать функцию drawCalendar, которая
// принимает три аргумента - год, месяц,
// htmlElement и выводит в этот элемент
// календарь на месяц (дни недели начинаются
// с понедельника ).

    function drawCalendar (htmlElement, year, month) {

      let months = month - 1; // месяцы  от 0 до 11
      let d = new Date(year, months);

    //   let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      // пробелы для первого ряда
      // с понедельника до первого дня месяца
      // * * * 1  2  3  4
      for (let i = 0; i < getDay(d); i++) {
        table += '<[td></td>]';
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
    //   if (getDay(d) != 0) {
    //     for (let i = getDay(d); i < 7; i++) {
    //       table += '<td></td>';
    //     }
    //   }

      // закрыть таблицу
      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day == 0) day = 7; // сделать воскресенье (0) последним днем
      return day - 1;
    }

    drawCalendar(calendar, 2021, 6);

// 11 Создать объект машины car, который имеет свойство "передача" и
// метод, который повышает/понижает передачу на 1. Также у объекта
// должен быть метод, который в зависимости от передачи
// возвращает сообщение о скорости: (-1) - 'back', 0 - 'neutral', 1 - 'slow',
// 2 - 'medium', 3 - 'fast', 4 - 'very fast'. При попытке сложить объект car с
// числом - число должно складываться в свойство speed и speed
// должна возвращаться. Если скорость больше 5 - должно быть
// выведено сообщение "Warning! Your speed is too high!"

let car = {  //обьект car
    gear: 0, // переменная
     upGear: function () {gear += 1;}, // метод, который повышает передачу на 1
     downGear: function () {gear -= 1;},// метод, который понижает передачу на 1
     startGeaR: function () { //конструктор возвращает сообщение
         if (this.gear == -1) {
             console.log('back'); 
         } else if (this.gear == 0) {
             console.log('neutral'); 
         }else if (this.gear == 1) {
             console.log('slow'); 
         }else if (this.gear == 2) {
             console.log('medium'); 
         }else if (this.gear == 3) {
             console.log('fast'); 
         }else if (this.gear == 4) {
             console.log('very fast'); 
         }else if (this.gear == 5) {
             console.log('Warning! Your speed is too high!'); 
         }
        
     } 
 };
 car.startGear();
 car.downGear();
 car.upGear();
 

//  Корректное задание про кэш данных: создать функцию, которая принимает параметром url.
//  При наличии данных в объекте кэше под ключом, совпадающим с урлом - вернуть их, 
//  а если такого ключа в объекте нет - запросить данные по данному урлу отдельной 
//  функцией (пока написать пустую функцию для этого), и сохранить полученные данные
//   под данным ключом

























 function Tiger (name,age,streh)
















Tiger.prototype.breath = function (){
console.log('AIG');
 };
 Tiger.prototype.meow = function (){
  console.log('Meoh');
   };
   Tiger.prototype.breath = function (){
    console.log('AIG');
     }