// 1 задание
const fruits = ['Apple', 'Peer', 'Orange', 'Grapes', 'Banana'];
let newFruits = fruits;
console.log(newFruits);

// 2 задание

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(String(vegetables))

// 3 задание

const nums = [1, 2, 3, 4, 5];
let result = nums.reduce((sum,current) => sum + current, 0);
console.log(result)

// 4 задание

const languages = ["php", "php", "css", "css", "script", "script", "html", "html", "java"]
results = [];
for (let i = 0; i < languages.length; i++) {
  languages[i] != languages[i - 1] && results.push(languages[i])
}

console.log(results)

// 5 задание

const repeatingNums = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
sum = 0;
for (let j = 0; j < repeatingNums.length; j++) {
 if(repeatingNums[j] === repeatingNums[j - 1] ) {
  sum++ 
 }
}

console.log(sum)

// 6 задание

const falsyArray = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let falsyArray2 = falsyArray.filter(Boolean)

console.log(falsyArray2)
