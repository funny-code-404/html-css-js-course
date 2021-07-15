// Написать f которая аргументом принимает имя и здоровается с пользователем
function talk(name) {
    name = prompt('What is your name?')
    alert(`Hello, ${name}`);
}
talk();

// Написать функцию нахождения максимального / минимального числа в массиве
let arr = [5, 78, 3, 2, 45, 467, 92, 3];
let arr2 = arr.reduce(function (a, b) {
    if (a < b) {
        return b;
    }
    if (a > b) {
        return a;
    }
});
console.log(arr2);

// Создать объект. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта: let obj = {a: 1, b: 2, c: 3};
let obj = {
    a: 1,
    b: 2,
    c: 3,
}
console.log(obj.c);
console.log(obj['c']);

// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
let salary = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000,
    Pety: 2000,
    Koly: 8000,
};
console.log(salary.Pety);
console.log(salary.Koly);

// Создайте объект с днями недели.  Выведите на экран текущий день недели. 
const week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};
console.log(week['2']); //Текущий день недели
var day;
for (let key in week) {
    if (week[key] == week['3']) { // day хранит значение 3
        day = key;
        console.log(day);
        console.log(week[day]);
    }
}

// Создать массивы имен и заработных плат объекта
let income = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
};
let worker = {};
for (let key in income) {
    if (income[key] !== null) {
        worker[key] = income[key];
    }
}
console.log(Object.keys(worker));
console.log(Object.values(worker));












