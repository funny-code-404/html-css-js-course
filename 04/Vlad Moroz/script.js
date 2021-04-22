
    function drawCalendar(year, month) {

        let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
        let d = new Date(year, mon);

        let weekDay = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
        let weeks = [];
        let days = [];
        weeks.push(weekDay);

        // пробелы для первого ряда
        for (let i = 0; i < getDay(d); i++) {
            days.push('');
        }
     
        while (d.getMonth() == mon) {
            days.push(d.getDate());
    
          if (getDay(d) % 7 == 6) { // последний день (вс) перевод строки
            weeks.push(days);
            days = [];
          }
          d.setDate(d.getDate() + 1);
        }
    
        // пустые ячейки в конце месяца, если нужно
        if (getDay(d) != 0) {
          for (let i = getDay(d); i < 7; i++) {
            days.push('');
          }
        } 
        weeks.push(days); 
        return weeks;
      }
    
      function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
        let day = date.getDay();
        if (day == 0) day = 7; // сделать воскресенье (0) последним днем
        return day - 1;
      }
    
      console.log( drawCalendar(2021, 4));