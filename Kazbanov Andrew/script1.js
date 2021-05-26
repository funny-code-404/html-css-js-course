//1 
// let object = {
//     name: 'Piter',
//     age: 38,
//     weigth: 100
// }
// console.log(object.weigth)

//2
// const nums = [1, 2, 3, 4, 5];
// let summ = nums.reduce((sum, current) => sum + current, 0);
// console.log(summ);

//3
// const fruits = ['apple', 'peer', 'orange', 'grape', 'banana'];
// let newArray = fruits;
// newArray.push('pineapple');
// console.log(newArray);

//4
// let vegetables = ['морковь', 'редиска', 'огурец', 'картофель'];
// console.log(vegetables.toString())

// const languages = ['php', 'php', 'css', 'css', 'script','script', 'html', 'html', 'java'];

// console.log(languages.filter((item, index) => languages.indexOf(item) === index));

//5
// const repeatingNums = [3,3,7,7,3,3,4,5,5,8,8,8];
// console.log(repeatingNums.filter((item, index) => repeatingNums.indexOf(item) === index))

//6
// const falsyArray = [NaN, 0, 77, false, -17, '', undefined, 99,null];
// console.log(falsyArray.filter(x => x));
// console.log(falsyArray.filter(Boolean));

//7
// let object = {
//     a:1, b:2, c:3,   
// }
// console.log(object['c'])
// console.log(object.c)

//8
// let week = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'
//};
// let day = week[3]
// console.log(day);

//9
// let earn = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }
// console.log(Object.keys(earn))
// console.log(Object.values(earn))

//10
// let earn1 = {
//     Peter: 1000,
//     Nick: 5000,
//     Steve: 2000,
//     };
    
//     console.log(Object.entries(earn1));
//     console.log(earn1.Peter);
//     console.log(earn1.Nick);


//11
    // let number1 = parseInt(prompt('Введите первое число'));
    // let action = prompt('Введите действие');
    // let number2 = parseInt(prompt('Введите второе число'));

    // switch (action == '*') {
    //             case true:
    //                 alert(number1 * number2);
                    
    //                 break;
    // }
    // switch (action == '/') {
    //     case true:
    //         alert(number1 / number2)
    //         break;
    // }
    // switch (action === '+') {
    // case true:
    //     alert(number1 + number2)
    //     break;
    // }
    // switch (action == '-') {
    // case true:
    //     alert(number1 - number2)
    //     break;
    // }

   