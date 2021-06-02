//1 написать функцию, которая аргументом принимает имя и здоровается с пользователем;
let name = prompt ("введите имя" );
alert( `Hello ${name}`);


//2 написать функцию нахождения максимального/минимального числа в массиве;
function getMaxOfArray() {
    return Math.max.apply(null,[10,15,43,29,35,7]);
  }
getMaxOfArray();
function getMinOfArray() {
    return Math.min.apply(null,[10,15,43,29,35,7]);
  }
getMinOfArray();

//3 Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные
// скобки и как свойство объекта: let obj = {a: 1, b: 2, c: 3};

let obj = {a: 1, b: 2, c: 3};

obj.c = 3;
obj["c"] = 3;

//4 Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
// (понедельник - первый и т.д.). Выведите на экран текущий день недели. Пусть теперь номер дня недели
// хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий
// значению переменной day.

let weekdays = { Sunday:1, Monday:2, Tuesday:3, Wednesday:4, Thursday:5, Friday:6, Saturday:7 };
weekdays.Saturday = 7;
let day = weekdays.Saturday;
console.log (day);

//5 Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
let obj = [ { Den: 1000},
           {Matt: 5000},
         {Steve: 2000},
         {Petr:1500}, 
         {Nik:1700},]
         console.log(obj[3]);
         console.log(obj[4]);

   

//6 Создать массивы имен и заработных плат объекта
let obj = [ { Den: 1000},
    {Matt: 5000},
  {Steve: 2000},
  {Petr:1500}, 
  {Nik:1700},]

//7 написать функцию суммы чисел до указанногго числа  - 20

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  sumTo(20)

//8 написать функцию калькулятор, которая
// запрашивает у пользователя данные в таком
// порядке: число - действие - число - и в
// зависимости от действия - производит
// соответствующее вычисление

function count(num1, num2, method) {
    switch (method) {
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
        case "*":
        return num1 * num2;
        break;
        case "/":
        return num1 / num2;
        break;
        case "%":
        return num1 % num2;
    } 
  }
  count (5,6,"*"); //30


//9 Написать с использованием замыканий функцию,
// которая будет хранить и складывать принимаемые
// аргументы в сумму и возвращать ее.

function makeSum(a) {
    return function(b) {
      return a + b;
    };
  };
  
  var add1 = makeSum(24);// замыкание
  var add2 = makeSum(29);// замыкание
  
  console.log(add1(21)); //45
  console.log(add2(12)); //41

//10 Создать кэш данных в объекте и возвращать данные из
// кэша, если значение имеется или записывать в него
// новые значения, если не имеется.
// Дополнить объект методом, который возвращает
// количество всех его ключей

// in process

// 11 Создать объект машины car, который имеет свойство "передача" и
// метод, который повышает/понижает передачу на 1. Также у объекта
// должен быть метод, который в зависимости от передачи
// возвращает сообщение о скорости: (-1) - 'back', 0 - 'neutral', 1 - 'slow',
// 2 - 'medium', 3 - 'fast', 4 - 'very fast'. При попытке сложить объект car с
// числом - число должно складываться в свойство speed и speed
// должна возвращаться. Если скорость больше 5 - должно быть
// выведено сообщение "Warning! Your speed is too high!"

// in process

var o1={}
var o2={
  prop1:'something',
  prop2: 23,
  prop3: null
}

varo3=Object.create(null);

varo4 = new Object();
varo5 = new Object({
  a:1,
  b:2
});

var o = {
  x: 1
}
console.log(o.x);

var a = 'x';
o.a = 2;
console.log(o.x);

var b = 'x';
o['b'] = 3;
console.log(o.x);

var o = {
  someMethod: function(){
    console.log('hey');
  }
}
console.log(o);
console.log(o.someMethod);
console.log(o.toString);

var o = {
  prop1: 1,
  _proto_:{
    prop2: 2,
    _proto_ :{
      prop3: 3
    }
  }
};

console.log(o.prop1);
console.log(o.prop2);
console.log(o.prop3);

var proto = {
  prop0:1
};
var o1 = {
  prop1:1,
  _proto_ : proto
};
var o2 = {
  prop2:2,
  _proto_ : proto
};

console.log (proto.prop0);

var o = {
  prop1:1,
  _proto_:{
    prop2:2
  }

};
for (propName in o) {
  console.log(propName);
}

console.log(propName, o.hasOwnProperty(propName)
? 'в объекте'
: 'в цепочке прототипов'
);

// var greer = function (){};
// var greek1 = function ("new", "try + tre"){
  
// }

// greek1();


const a= 10;