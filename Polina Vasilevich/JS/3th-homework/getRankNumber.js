// 3. Написать функцию, которая принимает массив, и собирает все однозначные числа в отдельный массив однозначных чисел, 
// двузначные - двузначных, трезначные - в массив трех значных чисел. 
// результатом вернуть двумерный массив (массив из массивов результатов).

function getRankNumber(numArray = []) {

    const singleDigitNum = [];
    const twoDigitNum = [];
    const threeDigitNum = [];
    const totalArr = [];
     
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i].toString().length === 1) {
            singleDigitNum .push(numArray[i]);
        } else if(numArray[i].toString().length === 2) {
            twoDigitNum.push(numArray[i]);
        } else if(numArray[i].toString().length === 3) {
            threeDigitNum.push(numArray[i]);
        }
    }

    totalArr.push(singleDigitNum, twoDigitNum, threeDigitNum);
    return totalArr;
}

arr = [1, 20, 345, 232323, 222, 22, 2];
console.log(getRankNumber());


