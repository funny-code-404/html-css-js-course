// 7. Написать функцию, которая выводит правильное склонение слова рубль в зависимости от входных параметров суммы: 
// например: getResult(12) - "12 рублЕЙ", getResult(3) - "3 рубля", getResult(71) - "71 рублЬ"

//#1
function getEnding(num) {
    const lastNumber = num % 10;
    const doubleLastNumbers = num % 100;

    return  doubleLastNumbers === 0 || doubleLastNumbers > 4 && doubleLastNumbers < 20 ? `${num} рублЕЙ` :
            lastNumber > 1 && lastNumber < 5 ? `${num} рублЯ`:
            lastNumber === 1 ? `${num} рублЬ`: `${num} рублЕЙ`;
}

let testStr1 = 20000;
let testStr2 = 333333;
let testStr3 = 225;

console.log(getEnding(testStr1));
console.log(getEnding(testStr2));
console.log(getEnding(testStr3));
