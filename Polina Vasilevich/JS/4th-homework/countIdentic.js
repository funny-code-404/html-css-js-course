// // 3. Напишите функцию countIdentic(arr), которая возвращает
// //  количество повторяющихся элементов в массиве.
/////#1
function countIdentic(arr) {
    const countNum = {};
    let count = 0;
    arr.forEach(item => {
        if (!(item in countNum)) {
            countNum[item] = 1;
        } else {
            countNum[item]++;
        }
    });

    for (let item in countNum) {
        if(countNum[item] > 1) {
            count++;
        }
    }

    return count;
}

console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])); // 4
console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9])); // 3

////#2
// function countIdentic(arr) {
//     const doubleNum = [];
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] === arr[j] && !doubleNum.includes(arr[i])) {
//                 doubleNum.push(arr[i]);   
//                 count++;
//             } 
//         }
//     }

//     console.log(count);
// }


// /////#3
// function countIdentic(arr) {
//     const countNum = [];
//     let count = 0;

//     arr.forEach((item, index) => {
//         if (!countNum.includes(item)) {
//             countNum.push(item);
//         } else if (!(arr.slice(index + 1).includes(item))) {
//             count += 1;
//         }

//     });
//     console.log(count);
// }


// countIdentic([4, 15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9, 4]);
// countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]);


// ///#4
// function countIdentic(arr) {
//     const doubleNum = [];
//     isDoubleNum = false;
//     for(let i = 0; i < arr.length; i++) { 
//         for(let j = i + 1; j < arr.length; j++) {//проверяем есть ли дубль элемента дальше в массиве
//             if(arr[i] === arr[j]) {
//                 for(let k = 0; k < doubleNum.length; k++) {
//                     if(arr[i] === doubleNum[k]) {
//                         isDoubleNum = true;
//                         break;
//                     }
//                 }

//                 if(!isDoubleNum) {
//                     doubleNum.push(arr[i]);
//                 }
                    
//                 isDoubleNum = false;

//             }

//         }
//     }

//     console.log(doubleNum.length);
    
// }

// countIdentic([4, 15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9, 4, 6]);


