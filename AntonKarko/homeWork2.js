// Создайте функцию клькулятора
/*function calcul () {
    let num1;
    let num2;
    let act;
    do {
        num1 = prompt("Введите сюда нужное вам число");
    } while (num1 != parseInt(num1) && num1);
    do {
        num2 = prompt("Введите сюда второе нужное вам число");
    } while (num2 != parseInt(num2) && num2);
    do {
        act = prompt("Введите математический знак: +, -, /, *, **");
    } while (act != '+' &&act != '-' &&act != '/' &&act != '*' &&act != '**' && act);
        if (act == '+') {
            console.log(parseInt(num1) + parseInt(num2));
        }else if (act == '-') {
            console.log(num1 - num2);
        } else if (act == '/') {
            console.log(num1 / num2);
        }else if (act == '*') {
            console.log(num1 * num2);
        }else if (act == '**') {
            console.log(num1 ** num2);
        }
};
calcul();*/

// Напишите функцию замыкания, которая зхранит и складывает принимаемые аргументы в сумму и возвращает ее.
/*function summ() {
    return function (a, b) {
        return a + b;      
    };
}
let suma = summ ();
suma(1,5);*/

// Создать кэш данных в обьекте и возвращать данные из кэша, если значение имеется или записыватьт в него новые значения, если не имеется.

/*let obj = {
    name: "Anton",
    age: 33,
    NumberOfProperties: function() {
       return Object.keys(obj).length;
    },
};
obj.NumberOfProperties();*/

// Создать обьект машины car, который имеет свойство "передача" и метод, который повышает/понижает передачу на 1. Также у обьекта должен быть метод, который в зависимости от передачи возвращает сообщение о скорости: (-1) - 'back', 0 - 'neutral', 1 - 'slow', 2 - 'medium', 3 - 'fast', 4- 'very fast'. При попытке сложить обьект car с числом - число должно складывать в свойство speed и speed должен возвращатьсяю Если скорость больше 5 - должно быть выведено сообщение "Warning! Your speed is too high!"

let car = {
    trans: 0,
    upTrans: function () {
        do {
           trans += + 1;
        }while (parseInt(trans) == 5) {
            console.log("Warning! Your speed is too high!");
        }
    }
}
console.log(car.upTrans());