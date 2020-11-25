/*6. Написать функцию, которая выводит правильное склонение слова рубль в зависимости от входных параметров суммы: 
например: getResult(12) - "12 рублЕЙ", getResult(3) - "3 рубля", getResult(71) - "71 рублЬ", */

function getResult(x) {
    let n = x % 10;
        if (n > 4 || n === 0 || x > 10 && x < 15) {
        console.log(x + ' рублей');
        } else {
            if (n > 1 && n < 5) {
            console.log(x + ' рубля');
            } else {
                console.log(x + ' рубль');
                }
        }
}

for (let i = 1; i <=100; i++) {
    getResult(i);
}