switch(name) {
    case 'Jane': console.log('Здравствуй, мисс ' + name);
    break;
    case 'John': console.log('Здравствуй, мистер ' + name);
    break;
    default: console.log('Здравствуте');
    }

    switch(name){
        case 'Vasili':console.log('прувед, товарищ ' + name);
        break;
        default: console.log('ghbdtn')
        }


// 1     Задание
// Напишите программу, которая выводит на экран числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
// а вместо чисел, кратных пяти — слово «Buzz».
// Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
for ( i = 1; i <= 100; i++) {
    if ((i%5)&&(i%3)) {
    console.log("FizzBuzz")}
    else if (i%5 === 0){
        console.log("Buzz")} 
    
    else if (i%3=== 0){
        console.log("Fizz")} 
    } ; 

// 2.Имеется строка: "Лето удалось очень жарким, было много ягод и фруктов, 
// лучшим местом для отдыха бфла речка".
// Заменить в данной строке все запятые на точки;
// Сделать буквы после запятых заглавными.


var string="Лето удалось очень жарким,\n было много ягод и фруктов,\n лучшим местом для отдыха бфла речка.";
summer=string.replace(/,/g, '.');
string = string[0].toUpperCase() + string.substring(1);
console.log(summer);



// 3.Достать имена из строки "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже" и создать
// новую строку - "На день рождения пришли: Антон, Дима, Женя, Миша"


function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('Оригинальная строка: "' + stringToSplit + '"');
  console.log('Разделитель: "' + separator + '"');
  console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
}

var tempestString = '"Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже';
var removedItems = tempestString.splice(4, 4);
var removedItems = tempestString.splice(8,12);
var removedItems = tempestString.splice(14, 15);
var space = ' ';


splitString(tempestString, space);



// 4.

// false+ false = true
// 15 / "5" = 3
// "20 * "10" = undefined/error
// 11 - 10 + "px" =1px
// "€" + 100 = €100
// "500" - 100 = 400
// "25rem" - 5 = NaN
// 1 / 0 = Infinity
// " -100 " + 50 =  -10050
// " -200 " - 20 = -200-20
// null + 1= 1

let name = 'V';
switch(name) {
case 'Jane': console.log('Здравствуй, мисс ' + name);
break;
case 'John': console.log('Здравствуй, мистер ' + name);
break;
default: console.log('Здравствуте');
};

let name = 'l';

switch(name){
    case 'V': console.log('Привет, мудачек ' +  name);
    break;
    case 'Z': console.log('Здорово, чувак ' + name);
    break;
    default: console.log('Добрый день');
};

// 5
// скопировать массив  в другой массив
const fruts = [ 'Apple', 'Pear','Orange','Grapes','Banana'];
let newarr = fruts.concat( [ ] );
console.log (newarr);
// 6
// преобразовать массив в строку
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']
array = vegetables + "";
console.log (array);
let array1 = vegetables.toString ();
console.log (array1);
// 7 получить сумму из элементов массива


const nums = [1, 2, 3, 4, 5];

let SumResult = nums.reduce(function(sum, arr) {
	return sum + arr;
}, 0);

console.log(SumResult);

// 8 Удалить повторяющиеся элементы из массива

const lanquages = ["php","php", "css", "css", "script","script", "html","html","java" ];

function arrayUnique(lanquages){
    return lanquages.filter((e,i,a)=>a.indexOf(e)==i)
};


console.log(arrayUnique(["php","php", "css", "css", "script","script", "html","html","java"])) ;


// 9 вести число повторяющихся элементов массива

const RepeatingNumbers = [3,3,7,7,3,3,4,5,5,8,8,8];
const RepeatingNumbers = [3,3,7,7,3,3,4,5,5,8,8,8].reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1; // вернёт acc[el], если оно эквивалентно true, или 0 в ином случае
    return acc;
  }, {});

  console.log (RepeatingNumbers);

// удалить все ложные элементы массива

const falsyArray = [ NaN, 0, 77, false, -17, '', undefined, 99, null ];

const falsyArray = [NaN, 0, 77, false, -17, '', undefined, 99, null ]
console.log(falsyArray.filter(x => x)) //  filter сохраняет только те элементы в массиве, для которых функция возвращает true 
// - здесь я использую x => x, потому что вам нужны только правдивые элементы

// 10 
// Достать имена из строки "Дима и Женя пришли на День
// рождения сразу, а Миша пришел позже" и создать новую строку
// - "На день рождения пришли: Антон, Дима, Женя, Миша"

// в процессе



