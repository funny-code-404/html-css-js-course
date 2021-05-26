// Задание из презентации 1 (FizzBuzz)

/*for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log('FizzBuzz'); continue
    } else if (i % 5 == 0){
        console.log('Buzz'); continue
    }else if (i % 3 == 0) {
console.log('Fizz'); continue
};
console.log(i);
}*/

/*for (let i = 1; i <= 100; i++) {
    (i % 5 == 0 && i % 3 == 0) ? console.log('FizzBuzz') :
    (i % 5 == 0) ? console.log('Buzz') :
    (i % 3 == 0) ? console.log('Fizz') :
    console.log(i);
}*/

/*for (let i = 1; i <= 100; i++) {
    switch (0) {
        case (i % 15) : console.log('FizzBuzz');
        break;
        case (i % 3) : console.log('Fizz');
        break
        case (i % 5) : console.log('Buzz');
        break;
        default : console.log(i);
            break;
    }
}*/

// Задание из презентации 1 (заменить запятые на точки...)

/*let str = 'Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была ручка';
let stri = str.replace(/,/g , ".");
string = stri.replace(/(^|\.\s+)(.)/g, function(a, b, c){
    return b + c.toUpperCase();
  });
console.log(string);*/

// задание из презентации (достать имена ...)

// // Достать имя из строки 

/*let str = 'Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже'
let arraysStr = str.split(' ');
let name = [];
for (let arrayStr of arraysStr) {
    if (arrayStr.charAt(0) === arrayStr.charAt(0).toUpperCase()) {
       name.push(arrayStr);
    }
}
console.log(`На день рождения пришли : ${name[0]} ${name[1]}, ${name[2]}, ${name[4]}`);*/


// var str = '<option value=\'64\'>Tom Антон, Дима и Женя пришли на день рождения сразу, а Миша пришел позже';
// var tmpStr = str.split("'");
// var name = (tmpStr[1].split(">"))[0];
// document.write(name);

// Задание из первой презентации (полиндромное слово)
/*const palindrome = str => {
    str = str.toLowerCase();
    let strReverse = str.split('').reverse().join('');
    if (strReverse === str) {
       return console.log('this is palindrome');
    } else {
        return console.log('this is not palindrome');
    }
}
palindrome('Racecar');
palindrome('Anton');*/

//Скопировать массив.
/*const fruits = ['Apple', 'Peer', 'Orange', 'Grapes', 'Banana'];
let copyFruits = fruits;*/

// Преобразовать массив.
/*let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let stringVegetables = vegetables.toString();
console.log(stringVegetables);*/

// Получить сумму элементов массива.
/*const nums = [1, 2, 3, 4, 5];
function sum(array) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
sum(nums);*/

// Удалить повторяющиеся элементы массива.
/*const languages = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
for (let i = languages.length ; i > 0; i--) {
    if (languages.indexOf(languages[i]) != i)
      languages.splice(i, 1);
  }
  console.log(languages);*/

// Вывести число повторяющихся элементов массива.
/*const repeatingNums = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
let result = {};
for (let i = 0; i < repeatingNums.length; ++i)
  {
      let a = repeatingNums[i];
      if (result[a] != undefined)
          ++result[a];
      else
          result[a] = 1;
  }
for (let key in result)
      console.log('число ' + key + ' - ' + result[key] + ' раз(а)');*/

// Удалить все ложные значения из массива.
/*constfalsyArray = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let ArrayFilter = constfalsyArray.filter(Boolean)
console.log(ArrayFilter);*/

// Создайте обьект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство обьекта.
/*obj = {a: 1, b: 2, c: 3};
console.log(obj['c']);
console.log(obj.c);*/

// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
/*let obj = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000,
    Peter: 15000,
    Kolia: 1500
};
console.log(`Заработная плата Пети ${obj.Peter} а заработная плата Коли ${obj.Kolia}`);*/

// Создать обьект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недлели. пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day. 
/*let obj = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};
let day = 1;
console.log(obj[day]);*/

// Создать массивы имен и заработных плат обьекта
/*let obj = new Map([
    ['Den', 1000],
    ['Matt', 5000],
    ['Steve', 2000]
]);
let names = [];
let wages = [];
for (let name of obj.keys()) {
    names.push(name);
}
for (let wage of obj.values()) {
    wages.push(wage);
}
console.log(names);
console.log(wages);*/ 
