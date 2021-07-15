// скопировать массив в другой массив

const fruits = ['Apple', 'Peer', 'Orange', 'Grapes', 'Banana']; 
let fruitsCopy = fruits.slice(0);
console.log (fruitsCopy);

// преобразовать массив в строку

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']; 
console.log(vegetables.join());

// получить сумму элементов массива

const nums = [1, 2, 3, 4, 5]; 
let sum = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0) {
        sum += nums[i];
    }
}
console.log(sum);

// удалить повторяющиеся элементы массива 

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

const language = ['php', 'php', 'css', 'css', 'script', 'script', 'html', 'html', 'java'];

console.log(unique(language)); 

// вывести число повторяющихся элементов массива

const repeatNums = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];

let uniqueNums = unique(repeatNums);

// удалить все ложные значения из массива 

const falseArray = [NaN, 0, 77, false, -17, '', undefined, 99, null];

let onlyTrue = falseArray.filter(Boolean)
console.log (onlyTrue);


// создть функцию спросить имя и потом поздароваться

function sayHelloy () {
    let isName = prompt ('What is your name?');
    let message = (`Hello, ${isName}`);
    return alert (message);
    }

sayHelloy ()

// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта: let obj = {a: 1, b: 2, c: 3};

const obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log (obj.c);
console.log (obj['c']);

// Cоздайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

let objSalary = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000,
}

console.log (objSalary['Den']);
console.log (objSalary['Matt']);


// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

let week = {
    day_01: 'monday',
    day_02: 'tuesday',
    day_03: 'wednsday',
    day_04: 'thursday',
    day_05: 'friday',
    day_06: 'saturday',
    day_07: 'sunday',
}

console.log (week['day_04']);

let day = week.day_04;
console.log (day);

// Создать массивы имен и заработных плат объекта
let objNew = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
};

let arrObjNames = Object.keys (objNew);
let arrObjSalary = Object.values (objNew);

console.log (arrObjNames, arrObjSalary);












