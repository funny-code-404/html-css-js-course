/**
 * Написать функцию `isDeepEqual`
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA 
 * @param {*} objB 
 * @return {boolean} идентичны ли параметры по содержимому
 */

let objA = {
    name: 'Vlad',
    age: 24
}
let objB = {
    name: 'Vlad',
    age: 23
}

function isDeepEqual(objA, objB) {
    if (JSON.stringify(objA) === JSON.stringify(objB) ) {
        return true;
    } else {
        return false;
    }
};

console.log( isDeepEqual(objA, objB));



/**
 * Написать фукнцию-калькулятор, которая работает следующим образом
 * calculate('+')(1)(2); // 3
 * calculate('*')(2)(3); // 6
 * Допустимые операции : + - * /
 */

 function calculate(oper) {
    return function (a) {
        return function (b) {
            if (oper == '+') {
                return b + a;
            } else if (oper == '-') {
                return b - a;
            } else if (oper == '*') {
                return b * a;
            } else if (oper == '/') {
                return b / a;
            } else {
                return console.log('Error!');
            }
        }
    }
}

console.log(calculate('*')(2)(3));

/**
 * Создайте конструктор-синглтон? Что такое синглтон?
 */

 let counterSingle = (function () {
    let instance = 0;
    let counter = 0;
  
    let getCounter = function () {
      return counter;
    }
  
    let increaseCounter = function () {
      counter ++;
    }
  
    let createInstance = function () {
      return {
        getCounter: getCounter,
        increaseCounter: increaseCounter
      }
    }
  
    return {
      getInstance: function () {
        return instance || (instance = createInstance());
      }
    }
  })();

    console.log(counterSingle.getInstance().getCounter());
    counterSingle.getInstance().increaseCounter();
    console.log(counterSingle.getInstance().getCounter());

/**
 * Написать фукнцию сумматор, которая будет работать 
 * var s = sum();
 * log(s); // 0
 * log(s(1)); // 1
 * log(s(1)(2)); //3
 * log(s(3)(4)(5)); // 12
 * Число вызовов может быть неограниченым
 */
function sum(num) {
    let result = num;

    return function fun(a) {
        result += a;
        console.log(result);
        return fun;
    }
    
}

sum(3)(4)(5);

/**
 * Написать функцию getCounter, так, 
 * чтобы работал следующий код
 * 
 * var c = getCounter(5);
 * c
 * .log() // 5
 * .add(4)
 * .log() // 9
 * .add(3)
 * .log() // 12
 * .reset()
 * .log() // 0
 * .add(8)
 * .log(); // 8
 * 
 * @param {number} num 
 */

function getCounter(num) {
    let counter = num;
    return function (n) {
        return counter+=n;
    }
}

let count = getCounter(5);
console.log(count(4));
console.log(count(3));

/**
 * Создать синхронную функцию sleep(seconds) так, чтобы работал код
 * console.log(new Date()); // Sun Oct 08 2017 10:44:34 GMT+0300 (+03)
 * sleep(9);
 * console.log(new Date()); // Sun Oct 08 2017 10:44:43 GMT+0300 (+03)
 * 
 * @param {number} num 
 */

function sleep(num) {
    setTimeout(() => { console.log(new Date()); }, num * 1000);
}
console.log(new Date());
sleep(9);

// ____________________________ car valueOf ____________________________

const car = {
    gear: 0,
    speed: 0,
    up: function () {
        console.log(this.gear += 1);
        return this;
    },
    down: function () {
        console.log(this.gear -= 1);
        return this;
    },
    info: function () {
        switch (this.gear) {
            case -1:
                console.log('back');
                break;
            case 0:
                console.log('neutral');
                break;
            case 1:
                console.log('slow');
                break;
            case 2:
                console.log('medium');
                break;
            case 3:
                console.log('fast');
                break;
            case 4:
                console.log('very fast');
                break;
        }

    }
}
car.valueOf = function () {
    if (this.speed >= 5) {
        console.log("Warning! Your speed is too high!");
    }
    return this.speed;
}
car + 5;

car.up().up().down().down().info();
