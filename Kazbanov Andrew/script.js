// for (let i = 1; i <= 100; i = i + 1)
//  {if ( i % 3 == 0 && i % 5 == 0)
// {console.log('FizzBuzz');
// }
//  else if (i % 3 == 0)
//     {console.log('Fizz');
// }
// else if ( i % 5 == 0)
// {console.log('Buzz');
// }

// else if ( i % 3 !=0 && i % 5 != 0 )
// {console.log(i)
// }}



for (let i = 1; i <= 100; i++){
    switch (i % 3 == 0 && i % 5 == 0) {
        case true:
           console.log('FizzBuzz') 
            break;
    }
    switch (i % 3 == 0) {
        case true:
            console.log('Fizz')
            break;
    }
    switch (i % 5 == 0) {
        case true:
            console.log('Buzz')
            break;
  
    }
    switch (i % 3 !=0 && i % 5 != 0) {
        case true:
            console.log(i)
            break;
    }
}


let string = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка";
let newString = string.replace(/,/g , '.');
console.log(newString);
;
console.log(newString.toUpperCase(2));