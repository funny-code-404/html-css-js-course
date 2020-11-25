/*- напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру): */

const arr1 = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];

function removeDuplicates(arr) { 
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (!temp.includes(arr[i])) {
            temp.push(arr[i]);
        }
    }
    console.log(temp);
}

removeDuplicates(arr1);