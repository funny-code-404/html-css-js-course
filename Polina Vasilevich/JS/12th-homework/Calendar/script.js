// Реализовать функцию drawCalendar, которая

// принимает три аргумента - год, месяц,

// htmlElement и выводит в этот элемент

// календарь на месяц (дни недели начинаются

// с понедельника ).

class Calendar {
  constructor({ month, year, elemHTML }) {
    this.year = year;
    this.month = month;
    this.elemHTML = elemHTML;
  }

  createTable() {
    const container = document.getElementById(this.elemHTML);
    container.innerHTML =
      '<div id="containerTable"><table id="calendarTable"></table><span id="leftArrow">&lt</span><span id="rightArrow">&gt</span></div>';
    // '<table id="calendarTable"></table><span id="leftArrow">&lt</span><span id="rightArrow">&gt</span>';
    // const table = document.createElement("table");
    // table.id = "calendarTable";
    // container.appendChild(table);
  }

  createTitleTable() {
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

    const table = document.getElementById("calendarTable");
    const caption = document.createElement("caption");
    caption.innerHTML = `<caption>${monthName[this.month - 1]} ${
      this.year
    } </caption>`;
    table.appendChild(caption);
  }

  createTitleDaysOfWeek() {
    const dayOfWeekName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const table = document.getElementById("calendarTable");
    const tr = document.createElement("tr");

    dayOfWeekName.forEach((item) => {
      const th = document.createElement("th");
      th.innerHTML = item;
      tr.appendChild(th);
    });

    table.appendChild(tr);
  }
  ///////////////////////////////////////
  getDayOfWeek() {
    const firstDayOfWeekInMonth = new Date(
      this.year,
      this.month - 1,
      1
    ).getDay();

    return !firstDayOfWeekInMonth
      ? 6
      : firstDayOfWeekInMonth === 1
      ? 1
      : firstDayOfWeekInMonth - 1;
  }

  getDaysMonth(dayOfWeek, countDaysInMonth) {
    const table = document.getElementById("calendarTable");
    const tr = document.createElement("tr");
    table.appendChild(tr);

    let counter = dayOfWeek;
    while (dayOfWeek > 0) {
      const td = document.createElement("td");
      tr.appendChild(td);
      dayOfWeek--;
    }
    for (let i = 1; i < countDaysInMonth + 1; i++) {
      counter++;

      if (counter > 7) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = i;
        tr.appendChild(td);
        table.appendChild(tr);
        counter = 1;
      } else {
        const tr = document.getElementById("calendarTable").lastElementChild;
        const td = document.createElement("td");
        td.innerHTML = i;
        tr.appendChild(td);
      }
    }
  }

  createListDaysMonth() {
    const date = new Date(this.year, this.month, 0);
    const countDaysInMonth = date.getDate();
    const dayOfWeek = this.getDayOfWeek();
    this.getDaysMonth(dayOfWeek, countDaysInMonth);
  }

  render(clickHandler) {
    this.createTable();
    this.createTitleTable();
    this.createTitleDaysOfWeek();
    this.createListDaysMonth();

    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    leftArrow.addEventListener("click", clickHandler);
    rightArrow.addEventListener("click", clickHandler);
  }
}

const createCalendar = function (container, month, year) {
  const onClickArrow = (e) => {
    e.preventDefault();
    if (calendar.month > 0 && calendar.month < 12) {
      e.target.id === "leftArrow"
        ? (calendar.month -= 1)
        : (calendar.month += 1);
      calendar.render(onClickArrow);
    }
  };

  const calendar = new Calendar({
    elemHTML: container,
    month: month,
    year: year,
  });

  calendar.render(onClickArrow);

  // const onClickLeftArrow = (e) => {
  //   e.preventDefault();
  //   const calendar = new Calendar({
  //     elemHTML: container,
  //     month: month,
  //     year: year,
  //   });

  //   calendar.month -= 1;
  //   calendar.render();
  // };

  // const onClickRightArrow = (e) => {
  //   e.preventDefault();

  //   const calendar = new Calendar({
  //     elemHTML: container,
  //     month: month,
  //     year: year,
  //   });

  //   calendar.month += 1;
  //   calendar.render();
  // };
  // const leftArrow = document.getElementById("leftArrow");
  // const rightArrow = document.getElementById("rightArrow");

  // leftArrow.addEventListener("click", onClickArrow);
  // rightArrow.addEventListener("click", onClickArrow);
};
