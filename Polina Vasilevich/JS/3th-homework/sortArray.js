// 6. Написать функцию сортировки массива (дополнительно, определить параметром, в какую стороу сортировать)

function sortArray(arr, isDesc = false) {
    let temp = 0;
    if(isDesc) {
        for(let i = 0; i <= arr.length - 1; i++) {
            for(let j = 0; j <= arr.length - i - 1; j++) {
                if(arr[j] < arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
    
        }
    } else {
        for(let i = 0; i <= arr.length - 1; i++) {
            for(let j = 0; j <= arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    return arr;
}

arr = [4, 2, 6, 8, 1, 3, 7, 5];
console.log(sortArray(arr, 1));