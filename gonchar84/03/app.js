// 1 задание

let number1 = Number(prompt("Введите число:"));
console.log(number1);

let action = (prompt("Введите действие: '+', '-', '*', '/' "));
console.log(action);

let number2 = Number(prompt("Введите число:"));
console.log(number2);

if (action == '+') {
    console.log(number1 + number2);
} else if (action == '-') {
    console.log(number1 - number2);
} else if (action == '*') {
    console.log(number1 * number2);
} else if (action == '/') {
    console.log(number1 / number2);
} else {
    console.log('Ошибка. Введите другие числа или дествие')
}