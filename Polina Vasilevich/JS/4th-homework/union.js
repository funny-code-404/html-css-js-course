// 4. Напишите функцию union, которая возвращает массив состоящий только 
// из уникальных элементов из каждого массива.
//#1
const union = function (array1, array2) {
    const withoutDuplicates = [];
    const unionArray = array1.concat(array2);

    unionArray.forEach((item) => {
        const firstCondition = array1.includes(item);
        const secondCondition = array2.includes(item);

        if (!firstCondition && secondCondition || firstCondition && !secondCondition) {
            withoutDuplicates.push(item);
        }
    });

    return withoutDuplicates;
}

const array1 = [-10, 8, 5, 2, 1, 6];
const array2 = [5, 2, 1, -9, 3, 7];

console.log(union(array1, array2));

////////////////////////////////////////////////
//#2
// const union = function(array1, array2) {
//     const newArray = [];

//     array1.forEach(item => {
//         if(!(array2.includes(item))){
//             newArray.push(item);
//         }
//     });

//     array2.forEach(item => {
//         if(!(array1.includes(item))){
//             newArray.push(item);
//         }
//     });

//     return newArray;
// }


// const array1 = [ -10, 8, 5, 2, 1, 6];
// const array2 = [5, 2, 1, -9, 3, 7]; 

// console.log(union(array1, array2));


