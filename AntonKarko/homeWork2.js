// Создайте функцию клькулятора
function calcul () {
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
calcul();

// Напишите функцию замыкания, которая хранит и складывает принимаемые аргументы в сумму и возвращает ее.
function summ() {
    return function (a, b) {
        return a + b;      
    };
}
let suma = summ ();
suma(1,5);

// Создать обьект машины car, который имеет свойство "передача" и метод, который повышает/понижает передачу на 1. Также у обьекта должен быть метод, который в зависимости от передачи возвращает сообщение о скорости: (-1) - 'back', 0 - 'neutral', 1 - 'slow', 2 - 'medium', 3 - 'fast', 4- 'very fast'. При попытке сложить обьект car с числом - число должно складывать в свойство speed и speed должен возвращатьсяю Если скорость больше 5 - должно быть выведено сообщение "Warning! Your speed is too high!"

const car = {
   transmission: 0,
    upTransmission: function () { this.transmission += 1;},
    downTransmission: function () { this.transmission -= 1;},
    shownTransmission: function () {
        if (this.transmission == -1) {
            console.log('back'); 
        } else if (this.transmission == 0) {
            console.log('neutral'); 
        }else if (this.transmission == 1) {
            console.log('slow'); 
        }else if (this.transmission == 2) {
            console.log('medium'); 
        }else if (this.transmission == 3) {
            console.log('fast'); 
        }else if (this.transmission == 4) {
            console.log('very fast'); 
        }else if (this.transmission == 5) {
            console.log('Warning! Your speed is too high!'); 
        }else
        console.log('Car is broken, Sorry...');
    } 
};

car.downTransmission();
car.upTransmission();
car.shownTransmission();
