// 3. Напишите функцию countIdentic(arr), которая возвращает
//  количество повторяющихся элементов в массиве.
/////#1
function countIdentic(arr) {
    const countNum = [];
    let count = 0;

    arr.forEach((item, index) => {
        if (!countNum.includes(item)) {
            countNum.push(item);
        } else if (!(arr.slice(index + 1).includes(item))) {
            count += 1;
        }

    });
    console.log(count);
}

countIdentic([4, 15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9, 4]);
countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]);


/////#2
function countIdentic(arr) {
    const countNum = {};
    arr.forEach(item => {
        if (!(item in countNum)) {
            countNum[item] = 1;
        } else {
            countNum[item] += 1;
        }
    });

    for (num in countNum) {
        console.log(`${num} --- ${countNum[num]}`)
    }


}

console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])); // 4
// countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3