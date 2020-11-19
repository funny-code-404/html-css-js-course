//2. Написать функцию, котора считает все указанные симоволы в строке, 
// например: getCount("Строка", "a") - должна вернуть 1.

function getCount(str, symbol) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === symbol) {
            count += 1;
        }
    }
    return `${symbol} --- ${count}`;
}

console.log(getCount('Ананас', 'а'));