/* 3. Написать функцию, которая заменяет все пробелы в строке на тире.*/

function searchString (str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += '-';
        } else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

searchString('Оля ля ля ля ля');