// Написать функцию `isDeepEqual`

// let obj = {
//     a: 55,
//     b: 123,
// };
// let obj2 = {
//     a: 123,
//     b: 55,
// };

// function isDeepEqual(objA, objB) {
//     let aKey = Object.keys(objA);
//     let aVal = Object.values(objA);
//     let bKey = Object.keys(objB);
//     let bVal = Object.values(objB);

//     if (objA === objB) {
//         return true;
//     }
//     if ((aKey.length !== bKey.length && aVal.length !== bVal.length)) {
//         return false;
//     }
//     let not = 0;
//     for (let i = 0; i < aKey.length; i++) {
//         if (aKey[i] !== bKey[i] || aVal[i] !== bVal[i]) {
//             ++not;
//         }
//     }
//     if (not > 0) {
//         return false;
//     } else {
//         return true;
//     }
// };
// console.log(isDeepEqual(obj, obj2));



// другое решение
// function isDeepEqual(objA, objB) {
//     if (JSON.stringify(objA) === JSON.stringify(objB) ) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(isDeepEqual(obj, obj2));


// ИТОГОВЫЙ ВАРИАНТ)))
let obj = {
    b: 55,
    a: 123,
};
let obj2 = {
    a: 123,
    b: 55,
};

function isDeepEqual(objA, objB) {
    let a = Object.entries(objA).sort();
    let b = Object.entries(objB).sort();
    let aStr = a.toString();
    let bStr = b.toString();

    if (a.length !== b.length) {
        return false;
    }
    if (aStr === bStr) {
        return true;
    } else {
        return false;
    }

};
console.log(isDeepEqual(obj, obj2));




// * Написать фукнцию-калькулятор, которая работает следующим образом

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
                return console.log('error');
            }
        }
    }
}
console.log(calculate('*')(5)(5));




// * Написать фукнцию сумматор, которая будет работать 
// * var s = sum();
// * console.log(s); // 0
// * console.log(s(1)); // 1
// * console.log(s(1)(2)); //3
// * console.log(s(3)(4)(5)); // 12
// * Число вызовов может быть неограниченым

function sum(n) {
    let rezult = n;

    function f(s) {
        rezult += s;
        console.log(rezult);
        return f;
    }
    console.log(rezult);
    return f;

};

console.log(sum(5)(10)(30));



// * Написать функцию getCounter, так, 
// * чтобы работал следующий код
// * 
// * var c = getCounter(5);
// * c
// * .log() // 5
// * .add(4)
// * .log() // 9
// * .add(3)
// * .log() // 12
// * .reset()
// * .log() // 0
// * .add(8)
// * .log(); // 8
// * 
// * @param {number} num 
// */


let obj = {
    num: 0,
    add: function (a) {
        console.log(this.num += a);
        return this;
    },
    min: function (m) {
        console.log(this.num -= m);
        return this;
    },
    reset: function () {
        console.log(this.num = 0);
        return this;
    },
    log: function () {
        console.log(this.num);
        return this.num;
    }
};


console.log(obj.add(5).min(2).add(100).reset().add(500).log());


// ____________________________ CAR

const car = {
    peredacha: 0,
    speed: 0,
    up: function () {
        console.log(this.peredacha += 1);
        return this;
    },
    down: function () {
        console.log(this.peredacha -= 1);
        return this;
    },
    log: function () {
        switch (this.peredacha) {
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
        if (this.peredacha >= 5) {
            console.log("Warning! Your speed is too high!");
        }
    }
}
car.valueOf = function () {
    return this.speed;
}
console.log(car + 3);
car.up().down().down().log();
console.log(car.speed);





// ____________________________ SINGLETONE
let counterModule = (function () {
    let counter = 0;
    let instance;

    let increaseCounter = function () {
        counter++;
    };
    let getCounter = function () {
        return counter;
    };
    let createInstance = function () {
        return {
            getCounter: getCounter,
            increaseCounter: increaseCounter
        }
    }
    return {
        getInstance: function () {
            return (instance || createInstance());
        }
    }

})();
