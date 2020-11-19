// 3. Написать функцию, которая принимает массив, и собирает все однозначные числа в отдельный массив однозначных чисел, 
// двузначные - двузначных, трезначные - в массив трех значных чисел. 
// результатом вернуть двумерный массив (массив из массивов результатов).

function getRankNumber(numArray) {

    const firstNumbers = [];
    const secondNumbers = [];
    const thirtNumbers = [];
    const totalNumbers = [];
     
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i].toString().length === 1) {
            firstNumbers.push(numArray[i]);
        } else if(numArray[i].toString().length === 2) {
            secondNumbers.push(numArray[i]);
        } else if(numArray[i].toString().length === 3) {
            thirtNumbers.push(numArray[i]);
        }
    }

    totalNumbers.push(firstNumbers, secondNumbers, thirtNumbers);
    return totalNumbers;
}

arr = [1, 20, 345, 232323, 222, 22, 2];
console.log(getRankNumber(arr));


