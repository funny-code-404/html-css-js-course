/* 4. Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.*/

const array_f = [5, 2, 1, -10, 8];
const array_s = [5, 2, 1, -9, 3, 7];

function unionCount (arr1, arr2) {
    const temp = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i]) || !arr1.includes(arr2[i])) {
            temp.push(arr1[i]);
            temp.push(arr2[i]);
        } else {
            if (arr2.includes(arr1[i]) && arr1.includes(arr2[i])) {
                temp.push(arr1[i]);
            }
        }
    }
    console.log(temp);
}
const union = function(array1, array2) {
    if (array1.length > array2.length) {
        unionCount(array1, array2);
    } else {
        if (array1.length < array2.length) {
            unionCount(array2, array1);
        }
    }
}

/*document.writeln(union(array1, array2)); // [-10,8,5,2,1,-9,3,7]*/
union(array_f, array_s);