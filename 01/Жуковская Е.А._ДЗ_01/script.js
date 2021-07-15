let str = 'Hello, world';

// 1.) Вывести каждый символ в цикле.

for (let i = 0; i <= str.length; i++) {
    console.log (str.charAt(i));
} 

// 2.) Создать строку, которя скопирует ее задом-наперед

// вариант 1

let reverse1 = str.length;

for (let b = reverse1; b <= str.length; b--) {
    if (b < 0) {
        break;
    }
console.log (str.charAt(b));
} 

// варинт 2

let w = "";
for (let c = str.length - 1; c >= 0; c--) {
    let reverseString = w += str[c];
    if (str.length === reverseString.length) {
        console.log (reverseString);
    } 
}

// 3.) Создать строку, которая будет копией данной, но не будет содержать букв "о"

// вариант 1

for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === 'o') {
        continue;
    }
    console.log (str.charAt(i)); 
} 

// вариант 2

console.log (str.replace('o',''));


// 4.) Создать строку, которая скопирует данную строку до первого знака ","

// вариант 1

for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === ',') {
        break;
    }
    console.log (str.charAt(i));
} 

// вариант 2

let comma = str.indexOf(',');
console.log (str.slice(0,comma));


// 5.) Создать строку, которая скопирует данную строку после первого знака ","

let comma2 = str.indexOf(',') + 1;
console.log (str.slice(comma2));


// 6.) Создать строку, которая скопирует данную строку  и заменит все буквы "l" на знак "-"

let all_l = /l/gi;
console.log (str.replace(all_l,'_'));


// 7.) Создать строку, которая скопирует данную строку  и заменит все заглавные буквы на строчные и наоборот

console.log (str.toUpperCase());
console.log (str.toLowerCase());


// 8.) Имеется строка: "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха бфла речка". Заменить в данной строке все запятые на точки;
let isSummer = 'Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка';
let all_comma = /,/gi;
console.log (isSummer.replace(all_comma,'.'));

// 9.) Сделать буквы после запятых заглавными.

let arr = isSummer.split(', ');
arr.forEach(item => console.log(firstLetterIsBig(item)));
function firstLetterIsBig (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 10.) Реализовать фукнцию isPalindrom, которая принимает на вход строку и возвращает результат проверки (true/ false ), является строка палиндромом (одинаково читается слева направо и справа налево ) или нет.

function isPalindrome(str) {
    let string = str.length,
        reverse = str.split('').reverse().join(''); 
    if (reverse == str) {
        return 'true';
    } else {
        return 'false';
    }
}

let isTrue = isPalindrome('sum summus mus');
let isFalse = isPalindrome('я самая маленькая мышь');

console.log(isTrue, isFalse);

// 11.) Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных 3, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for(let p = 1; p <= 100; ++p) {
    if (p % 3 !== 0 && p % 5 !== 0) {
        console.log (p);
    } 
    if (p % 3 == 0 && p % 5 !== 0) {
        console.log (p + ' = Fizz');
    } 
    if (p % 5 == 0 && p % 3 !== 0) {
        console.log (p + ' = Buzz');
    } 
    if (p % 3 == 0 && p % 5 == 0) {
        console.log ( p + ' = FizzBuzz');
    } 
} 

























