// 1. Написать функцию spiral, которая принимает на вход двумерный массив и возвращает одномерный массив с элементами расположенными по спирали. Матрица не обязательно имеет одинаковые размеры по обеим сторонам. Примеры:
// spiral([[4, 5], [6, 7]]); // [4,5,7,6]

// // spiral([[1, 2, 3],
//            [4, 5, 6],
//            [7, 8, 9]]); // [1,2,3,6,9,8,7,4,5]

// spiral([
//   [1,  2,  3,  4, 5],
//   [6,  7,  8,  9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20]
// ]); // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]

function spiral(arr) {
  const copyArray = arr.splice(0);
  const result = [];

  while (copyArray.length > 0) {
    ///top
    result.push(...copyArray.shift());

    //right
    for (let i = 0; i < copyArray.length; i++) {
      const isNotLastString = copyArray[i + 1];
      if (isNotLastString) {
        const currentElem = copyArray[i];
        result.push(currentElem.pop());
      } else {
        ///bottom
        result.push(...copyArray.pop().reverse());
      }
    }
    ///left
    for (let i = 1; i < copyArray.length; i++) {
      const currentElem = copyArray[i];
      result.push(currentElem.shift());
    }
  }

  return result;
}

console.log(
  spiral([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ])
); // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]

console.log(
  spiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]

console.log(
  spiral([
    [4, 5],
    [6, 7],
  ])
); // [4,5,7,6]
