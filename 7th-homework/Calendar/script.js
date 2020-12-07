// Реализовать функцию drawCalendar, которая

// принимает три аргумента - год, месяц,

// htmlElement и выводит в этот элемент

// календарь на месяц (дни недели начинаются

// с понедельника ).

function createCalendar(year, month) {
  const elemDocument = document.getElementById("calendar");
  let table = "<table>";

  function createTitleTable() {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    table += `<caption>${monthName[month - 1]} ${year}</caption>`;
  }

  function createTitleDaysOfWeek() {
    const dayOfWeekName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    table += "<tr>";
    dayOfWeekName.forEach((item) => (table += `<th>${item}</th>`));
    table += "</tr>";
  }

  function createListDaysMonth() {
    const date = new Date(year, month, 0);
    const countDaysInMonth = date.getDate();

    function getDayOfWeek() {
      const firstDayOfWeekInMonth = new Date(year, month - 1, 1).getDay();
      return !firstDayOfWeekInMonth
        ? 6
        : firstDayOfWeekInMonth === 1
        ? 1
        : firstDayOfWeekInMonth - 1;
    }

    function getDaysMonth(dayOfWeek, countDaysInMonth) {
      table += "<tr>";
      let counter = dayOfWeek;
      while (dayOfWeek > 0) {
        table += "<td></td>";
        dayOfWeek--;
      }

      for (let i = 1; i < countDaysInMonth + 1; i++) {
        counter++;
        if (counter > 7) {
          table += `<tr><td>${i}</td>`;
          counter = 1;
        } else {
          table += `<td>${i}</td>`;
        }
      }
    }
    const dayOfWeek = getDayOfWeek();
    getDaysMonth(dayOfWeek, countDaysInMonth);
  }

  createTitleTable();
  createTitleDaysOfWeek();
  createListDaysMonth();
  elemDocument.innerHTML = table;
}

createCalendar(2020, 12);
