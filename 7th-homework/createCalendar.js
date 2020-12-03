// Реализовать функцию drawCalendar, которая
// принимает три аргумента - год, месяц,
// htmlElement и выводит в этот элемент
// календарь на месяц (дни недели начинаются
// с понедельника ).

function createCalendar(year, month) {
  const date = new Date(year, month, 0);
  const countDaysInMonth = date.getDate();

  let counter = 0;
  let str = "";
  for (let i = 1; i < countDaysInMonth + 1; i++) {
    if (counter < 7) {
      str += ` ${i} `;
      counter++;
    } else {
      counter = 1;
      str += `\n ${i} `;
    }
  }
  return str;
}

console.log(createCalendar(2020, 12));
