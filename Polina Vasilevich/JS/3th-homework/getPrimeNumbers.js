// 5. Написать функцию поиска простых чисел в ряде (функция принимает предельное значение, 
//     до которого осуществляется поиск, стартует - с 0. результатом должен быть возвращен массив;   
//     простое число - число, которое делится без остатка только на самого себя и на 1)

function getPrimeNumbers(lastNum) {
    const numArr = [];
    for(let i = 0; i < lastNum + 1; i++) {
        let count = 0;
        for(let j = 0; j < i; j++) {
            if(!(i % j)) {
                count += 1;
            }
         }

         if(count === 2) {
             numArr.push(i);
         }
    }
    return numArr;
}

num = 12;

console.log(getPrimeNumbers(num));
