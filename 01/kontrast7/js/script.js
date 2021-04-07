// есть строка "Hello, world"

// 1.) Вывести каждый символ в цикле.
// 2.) Создать строку, которя скопирует ее задом-наперед
// 3.) Создать строку, которая будет копией данной, но не будет содержать букв "о"
// 4.) Создать строку, которая скопирует данную строку  до первого знака ","
// 5.) Создать строку, которая скопирует данную строку  после первого знака ","
// 6.) Создать строку, которая скопирует данную строку  и заменит все буквы "l" на знак "-"
// 7.) Создать строку, которая скопирует данную строку  и заменит все заглавные буквы на строчные и наоборот

const strHello = "Hello, WorlD";
for (let i = 0; i < strHello.length; i++) {
    console.log(strHello[i]);
};

console.log(strHello.split("").reverse().join(""));

let strCopy = strHello.replace(/o/g, '');
console.log(strCopy);

let str1 = strHello.indexOf(",");
let str2 = strHello.slice(0, str1);
let str3 = strHello.slice(str1 + 2, strHello.length);

console.log(str2);
console.log(str3);

let str4 = strHello.replace(/l/g, '-');
console.log(str4);

var newStr = "";
for (let i = 0; i < strHello.length; i++) {

    if (strHello[i] === strHello[i].toLowerCase()) {
        newStr += strHello[i].toUpperCase();
    } else {
        newStr += strHello[i].toLowerCase();
    }
}
console.log(newStr);



// SUMMER_________________________________________________

let leto = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка";

let a = leto.replace(/,/g, '.');
let one = a.indexOf(".");
let two = a.lastIndexOf(".");

let aaa = a.slice(0, one);
let bbb = a.slice(one, two);
let ccc = a.slice(two, a.length);
let newbbb = bbb[2].toUpperCase() + bbb.slice(3);
let newccc = ccc[2].toUpperCase() + ccc.slice(3);
let newLeto = aaa.concat(". ", newbbb, ". ", newccc);
console.log(newLeto);


// NAME____________________________________________________
let strName = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже".split(" ");
let arr = [];
for (let i = 0; i < strName.length; i++) {
    if ((strName[i].charAt(0) >= 'А') && (strName[i].charAt(0) < 'Я') && (strName[i] != 'День')) {
        arr[i] = strName[i];
    }
}
let filtered = arr.filter(Boolean);
let strNameFin = `На день рождения пришли: ${filtered[0]} ${filtered[1]}, ${filtered[2]}, ${filtered[3]}.`
console.log(strNameFin);



// PALINDROME_____________________________________________
function isPalindrom(str) {
    if (str === str.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrom('abba'));



for (let i = 0; i < 100; i++) {
    while (i % 3 == 0) {
        console.log('fizz');
        break;
    }
    while (i % 5 == 0) {
        console.log('buzz');
        break;
    }
    while (i % 5 == 0 && i % 3 == 0) {
        console.log('fizzbuzz');
        break;
    }
    console.log(i);
}
