function calendar(year, month) {
    month--;
    //* создаём пустой массив
    var arr = [];
    //* первое число месяца всегда 1
    let firstDateOfMotnh = 1;
    //* последнее число месяца
    let lastDayOfMonth = getLastDayOfMonth(year, month);


    //* сколько пробелов в календаре будет в начале месяца
    let unshiftElemNum = getUnShiftElemNum(year, month);
    //* сколько пробелов в календаре будет в конце месяца
    let pushElemNum = getPushElemNum(year, month);


    //* создаем массив
    arr = createArr(firstDateOfMotnh, lastDayOfMonth);
    //* добавляем в массив количество пробелов в начале
    arr = unshiftElem(unshiftElemNum, arr);
    //* добавляем в массив количество пробелов в конце
    arr = pushElem(pushElemNum, arr);
    //* делаем 2 мерный масив
    arr = chunkArr(7, arr);
    console.log(arr);
};

calendar(2021, 12);


//* последнее число месяца
function getLastDayOfMonth(year, month) {
    let day = new Date(year, month + 1, 0);
    return day.getDate();
};

//* изменяем порядок дней недели на нормальный
function getRealDayOfWeekNum(jsDayNum) {
    if (jsDayNum == 0) {
        return 7;
    } else {
        return jsDayNum;
    }
};

//* первый день денели месяца
function getFirstDayWeekOfMonthNum(year, month) {
    let day = new Date(year, month, 1);
    return day.getDay();
};

//* последний день денели месяца
function getLastDayWeekOfMonthNum(year, month) {
    let day = new Date(year, month + 1, 0);
    return day.getDay();
};

//* получаем количество пробелов сначала
function getUnShiftElemNum(year, month) {
    let jsDayNum = getFirstDayWeekOfMonthNum(year, month);
    let realDayNum = getRealDayOfWeekNum(jsDayNum);
    return realDayNum - 1;
};

//* получаем количество пробелов в конце
function getPushElemNum(year, month) {
    let jsDayNum = getLastDayWeekOfMonthNum(year, month);
    let realDayNum = getRealDayOfWeekNum(jsDayNum);
    return 7 - realDayNum;
};




// ____________________________ РАБОТА С МАССИВОМ
//* создаем массив дней
function createArr(from, to) {
    let arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
    return arr;
};

//* добавляем в начало пустые строчки
function unshiftElem(num, arr) {
    for (let i = 0; i < num; i++) {
        arr.unshift(" ")
    }
    return arr;
};

//* добавляем в конец массива пустые строчки
function pushElem(num, arr) {
    for (let i = 0; i < num; i++) {
        arr.push(" ")
    }
    return arr;
}


function chunkArr(num, arr) {
    let rez = [];
    let ch = [];
    let day = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    let iteration = arr.length / num;
    rez.push(day);
    for (let i = 0; i < iteration; i++) {
        ch = arr.splice(0, num)
        rez.push(ch)
    }
    return rez;
}