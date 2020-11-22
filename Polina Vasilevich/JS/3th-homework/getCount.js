//2. Написать функцию, котора считает все указанные симоволы в строке, 
// например: getCount("Строка", "a") - должна вернуть 1.

function getCountChar(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === char) {
            count += 1;
        }
    }
    return `There are ${count} "${char}" in "${str}".`;
}

console.log(getCountChar('Ананас', 'а'));
