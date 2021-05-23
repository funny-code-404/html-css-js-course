//1. Имеется строка: "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха бфла речка".
// Заменить в данной строке все запятые на точки;
// Сделать буквы после запятых заглавными.

let string =  "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка";
console.log(string);
let newString = '.';
string = string.split(',').join(newString);
console.log(string);



  
// 2. Достать имена из строки "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже" и создать
// новую строку - "На день рождения пришли: Антон, Дима, Женя, Миша"
let str = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже";
let str0 = str.slice(26);
let str1 = str.slice(27, 42);
str0 = str0[0].toUpperCase()
let str2 = str.slice(0, 11);
let str3 = str.slice(14, 18);
let str4 = str.slice(52, 56);
console.log(str0 + str1 + ' пришли: ' + str2 + ', ' + str3 + ', ' + str4)

//3. Реализовать фукнцию isPalindrom, которая принимает на вход строку и возвращает результат проверки (true/ false ),
// является строка палиндромом (одинаково читается слева направо и справа налево ) или нет.


function isPalindrom(stroka) {
    let stroka1 = stroka.length,
        strokaReverse = stroka.split('').reverse().join(''); 
    if (strokaReverse == stroka) {
      return 'true';
    } else {
      return 'false';
    }
  }

  word1 = isPalindrom('кок');
  word2 = isPalindrom('курок');
 
  console.log(word1);
  console.log(word2);
 


//   4.

 let a = false + false;
 let b = 15 / "5";
 let c = "20" * "10";
 let d = 11 - 10 + "px";
 let e = "€" + 100;
 let f = "500" - 100;
 let g = "25rem" - 5;
 let h = 1 / 0;
 let i = " -100 " + 50;
 let j = " -200 " - 20;
 let k = null + 1;
 console.log(a, b, c, d, e, f, g, h, i, j, k)