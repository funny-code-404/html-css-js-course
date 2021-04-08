const fruits = ['Apple', 'Peer','Orange', 'Grapes', 'Banana'];

const fruits2 = [];

for (i=0; i < fruits.length; i++) {
    fruits2[i] = fruits[i];
}
console.log(fruits);
console.log(fruits2);

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let vegetablesStr = '';

for (i=0; i < vegetables.length; i++) {
    vegetablesStr += vegetables[i] + ' ';
}
console.log(vegetablesStr);

const nums = [1,2,3,4,5];
let sum = 0;

for (i=0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum);

const languages = ['php','php', 'css','css', 'script','script', 'html','html', 'java'];

for (var q=1, i=1; q<languages.length; ++q) {
  if (languages[q] !== languages[q-1]) {
    languages[i++] = languages[q];
  }
}

languages.length = i;

console.log(languages);

const languages = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
let languagesResult = [];

for (let i = 0; i < languages.length; i++) {
  if (!languagesResult.includes(languages[i])) {
    languagesResult.push(languages[i]);
  }
}

console.log(languagesResult);

const repeatingNums = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
let numsResult = {};
for (let i = 0; i < repeatingNums.length; ++i) {
  let a = repeatingNums[i];
  if (numsResult[a]) {
    numsResult[a] += 1;
  } else {
    numsResult[a] = 1;
  }
}
for (let key in numsResult) {
  console.log("Число " + key + " == " + numsResult[key] + " раз(а)");
}

const falsyArray = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let trueArray = [];

for (let i = 0; i < falsyArray.length; ++i) { 
    if (falsyArray[i]){
        trueArray.push(falsyArray[i]);
    }
}

console.log(trueArray);

let userName = prompt('Введите имя');
function sayHello (name) {alert(`Привет, ${name}`)};
sayHello (userName);

const nums = [2, 5, 1, 4, 6];

let min = nums[0];
let max = min;
for (i = 1; i < nums.length; ++i) {
  if (nums[i] > max) {
    max = nums[i];
  }
  if (nums[i] < min) {
    min = nums[i];
  }
}

console.log(min);
console.log(max);

let firstNum = +prompt("Введите первое число");
let secondNum = +prompt("Введите второе число");
let znak = prompt("Введите знак");

while (znak == "+" && znak == "-" && znak == "*" && znak == "/") {

function sum(num1, num2) {
  return num1 + num2;
}
function min(num1, num2) {
  return num1 - num2;
}
function del(num1, num2) {
  return num1 / num2;
}
function mul(num1, num2) {
  return num1 * num2;
}

switch (true) {
  case znak === "+":
    alert(sum(firstNum, secondNum));
    break;
  case znak === "-":
    alert(min(firstNum, secondNum));
    break;
  case znak === "/":
    alert(del(firstNum, secondNum));
    break;
  case znak === "*":
    alert(mul(firstNum, secondNum));
    break;
  default:
    alert(znak);
    break;
}
}
