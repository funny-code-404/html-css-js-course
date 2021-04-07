// скопировать массив
const fruits = ['1', '2', '3'];
const newArr = fruits.slice(0);
console.log(newArr)


// преобразовать массив в строку
let newStr = '';
for (let i = 0; i < fruits.length; i++) {
    newStr += fruits[i];
}
console.log(newStr);


// получить сумму элементов массива
const fruits1 = ['1', '2', '3'];
let newStr2 = 0;
for (let i = 0; i < fruits1.length; i++) {
    newStr2 += +fruits1[i];
}
console.log(newStr2);


// удалить ложные значения из массива
const falsyArr = [NaN, 0, '', 15, -17];
// trueOnly = falsyArr.filter(Boolean);
// console.log(trueOnly);
let trueArr = [];
for (let i = 0; i < falsyArr.length; i++) {
    if (falsyArr[i]) {
        trueArr.push(falsyArr[i]);
    }
}
console.log(trueArr);


// удалить повторяющиеся элементы из массива
const numArr = ['1', '1', '3', '1', '3', '3'];
// let newNumArr = 0;
// for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] == numArr[i - 1]) {
//         ++newNumArr;
//     }
// }
// console.log(newNumArr);
let arr_1 = Array.from(new Set(numArr));
console.log(arr_1);





// вывести число повторяющихся элементов
const numArr2 = ['1', '1', '3', '1', '3', '3', '7', '7', '5', '5', '5'];
let arr_2 = Array.from(new Set(numArr2));
console.log(numArr2.length - arr_2.length);





// как тебя зовут
const Name = prompt('Как тебя зовут?', '');

function sayHello() {
    alert(`Привет ${Name}`);
}
sayHello(Name);



// min max
let arr111 = [-1, 560, 10, 20, -20];

function minMax(arr) {
    let min = 0;
    let max = 0;
    let arrrr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    arrrr[0] = min;
    arrrr[1] = max;
    return arrrr;

}

console.log(minMax(arr111));





// калькулятор
const oper1 = +prompt('1 операнд', '');
const oper2 = +prompt('2 операнд', '');

function getZnak() {
    for (var i = 1; i <= 2; i++) {
        let znak = prompt('что сделать?', '');
        if (znak == '+' || znak == '-' || znak == '*' || znak == '/') {
            return znak;
        } else {
            i--;
        }
    }
}

function sum(oper1, oper2) {
    return oper1 + oper2;
}

function minus(oper1, oper2) {
    return oper1 - oper2;
}

function del(oper1, oper2) {
    return oper1 / oper2;
}

function umn(oper1, oper2) {
    return oper1 * oper2;
}

function calculate(o1, o2, z) {
    switch (z) {
        case '+':
            alert(sum(o1, o2));
            break;
        case '-':
            alert(minus(o1, o2));
            break;
        case '/':
            alert(del(o1, o2));
            break;
        case '*':
            alert(umn(o1, o2));
            break;
        default:


    }

}

calculate(oper1, oper2, getZnak());