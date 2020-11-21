// 6. Написать функцию сортировки массива (дополнительно, определить параметром, в какую стороу сортировать)

function swap(arr, j) {
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

function sortArray(arr, isDesc = false) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr.length - i; j++) {
            const firstСondition = arr[j] > arr[j + 1];
            const secondСondition = arr[j] < arr[j + 1];

            if (!isDesc && firstСondition) {
                swap(arr, j);
            } else if (isDesc && secondСondition) {
                swap(arr, j);
            }

        }
    }

    return arr;
}

arr = [4, 2, 6, 8, 1, 3, 7, 5];
console.log(sortArray(arr, 1));

///////////////////////////////////////////////////
///#2
// function sortArray(arr, isDesc = false) {
//     let temp = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     if (isDesc) {
//         return arr.reverse();
//     } else {
//         return arr;
//     }

// }

// arr = [4, 2, 6, 8, 1, 3, 7, 5];
// console.log(sortArray(arr));
