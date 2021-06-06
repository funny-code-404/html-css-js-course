//1 
/*
написать функцию калькулятор, которая запрашивает у пользователя данные в таком порядке: число - действие - число - и в зависимости от действия - производит соответствующее вычислени
*/


let number1 = parseInt(prompt('Введите первое число'));
let action = prompt('Введите действие');
let number2 = parseInt(prompt('Введите второе число'));

switch (action == '*') {
	case true:
		console.log(number1 * number2)
		break;
	}

switch (action == '/') {
	case true:
		console.log(number1 / number2)
		break;
	}

switch (action === '+') {
	case true:
		console.log(number1 + number2)
		break;
	}

switch (action == '-') {
	case true:
		console.log(number1 - number2)
		break;
	}


// 2 
/*Имеется строка: 
"Лето удалось очень жарким, было много ягод и 
фруктов, лучшим местом для отдыха была речка".
Заменить в данной строке все запятые на точки;
Сделать буквы после запятых заглавными. */


let str1 = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка";
console.log(str1);

let str2 = str1.replace(/\,/g, '.');
console.log(str2);

string = str2.replace(/(^|\.\s+)(.)/g,
function (a, b, c) {
	return b+c.toUpperCase();
});

console.log(string);


// 3

for (let i = 1; i <= 100; i++) {

	if (i % 15 == 0)
		console.log("FizzBuzz");
	else if (i % 3 == 0)
		console.log("Fizz");
	else if (i % 5 == 0)
		console.log("Buzz");
	else
		console.log(i);
}

for (let i = 1; i <= 100; i++) {

	(i % 5 == 0 && i % 3 == 0) ? console.log('FizzBuzz') :
		(i % 5 == 0) ? console.log('Buzz') :
			(i % 3 == 0) ? console.log('Fizz') :
				console.log(i);
}

for (let i = 1; i <= 100; i++) {

	switch (0) {
		case (i % 15): console.log('FizzBuzz');
			break;
		case (i % 5): console.log('Buzz');
			break;
		case (i % 3): console.log('Fizz');
			break;
		default: console.log(i);
			break
	}
}
