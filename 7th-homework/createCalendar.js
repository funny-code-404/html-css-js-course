// Реализовать функцию drawCalendar, которая

// принимает три аргумента - год, месяц,

// htmlElement и выводит в этот элемент

// календарь на месяц (дни недели начинаются

// с понедельника ).

function createCalendar(year, month) {
  const date = new Date(year, month, 0);

  const countDaysInMonth = date.getDate();

  const firstDayInMonth = new Date(year, month - 1, 1).getDay();

  function getDayOfWeek() {
    return !firstDayInMonth
      ? 7
      : firstDayInMonth === 1
      ? 1
      : firstDayInMonth - 1;
  }

  function getDaysArray(dayOfWeek) {
    const daysArray = [];

    daysArray[dayOfWeek] = 1;
    counter = dayOfWeek;
    for (let i = 2; i < countDaysInMonth + 1; i++) {
      counter++;

      if (counter > 6) {
        counter = 0;

        daysArray.push("\n" + i);
      } else {
        daysArray.push(i);
      }
    }
    return daysArray;
  }

  const dayOfWeek = getDayOfWeek();

  function transformArray(daysArray) {
    for (let i = 0; i < daysArray.length; i++) {
      if (daysArray[i] > 0 && daysArray[i] < 10) {
        daysArray[i] = " " + daysArray[i];
      } else if (!daysArray[i]) {
        daysArray[i] = "  ";
      }
    }
    return daysArray;
  }

  const daysArray = getDaysArray(dayOfWeek);

  return transformArray(daysArray).join("  ");
}

console.log(createCalendar(2020, 12));
