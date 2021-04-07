// Задания

// есть строка "Hello, world"

// 1.) Вывести каждый символ в цикле.
// 2.) Создать строку, которя скопирует ее задом-наперед
// 3.) Создать строку, которая будет копией данной, но не будет содержать букв "о"
// 4.) Создать строку, которая скопирует данную строку  до первого знака ","
// 5.) Создать строку, которая скопирует данную строку  после первого знака ","
// 6.) Создать строку, которая скопирует данную строку  и заменит все буквы "l" на знак "-"
// 7.) Создать строку, которая скопирует данную строку  и заменит все заглавные буквы на строчные и наоборот

let str = "Hello, world";

for (i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// ---------------------------------

let str2 = str.split("").reverse().join("");
console.log(str2);

// ---------------------------------

let str3 = str.replace(/o/g, "");
console.log(str3);

// ---------------------------------

let index = str.indexOf(",");
let str4 = str.slice(0, index);
let str5 = str.slice(index + 1);
console.log(str4);
console.log(str5);

// ---------------------------------

let str6 = str.replace(/l/g, "-");
console.log(str6);

// ---------------------------------

let str7 = "";
for (i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    str7 += str[i].toLowerCase();
  } else {
    str7 += str[i].toUpperCase();
  }
}

console.log(str7);

// Имеется строка: "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха бфла речка".
//   Заменить в данной строке все запятые на точки;
//   Сделать буквы после запятых заглавными.

let strSummer = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка";

let newStrSummer = strSummer.replace(/,/g, ".").split(".");

let firstSentence = newStrSummer[0] + ". ";
let twoSentence = newStrSummer[1];
let threeSentence = newStrSummer[2];

let newtwoSentence = twoSentence[1].toUpperCase() + twoSentence.slice(2) + ". ";
let newthreeSentence = threeSentence[1].toUpperCase() + threeSentence.slice(2) + ".";

newStrSummer = firstSentence.concat(newtwoSentence, newthreeSentence);

console.log(newStrSummer);

// Достать имена из строки "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже" и создать
// новую строку - "На день рождения пришли: Антон, Дима, Женя, Миша"

let strNames = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже".split(" ");
const arrNames = [];

for (i = 0; i < strNames.length; i++) {
  if (strNames[i].charAt(0) >= "А" && strNames[i].charAt(0) <= "Я" && strNames[i] != "День") {
    arrNames.push(strNames[i]);
  }
}
console.log(arrNames);
let newStrNames = `На день рождения пришли: ${arrNames[0]} ${arrNames[1]}, ${arrNames[2]}, ${arrNames[3]}.`;
console.log(newStrNames);

// Реализовать фукнцию isPalindrom, которая принимает на вход строку и возвращает результат проверки (true/ false ),
// является строка палиндромом (одинаково читается слева направо и справа налево ) или нет.

function isPalindrom(palindrom) {
    if (palindrom === palindrom.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrom('mam'));
