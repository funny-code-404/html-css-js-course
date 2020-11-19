// 4. Написать функцию, которая заменяет все пробелы в строке на тире.
function replaceSpaces(str, delimiter = ' ', replaceDelimiter = '-') {
    return str.split(delimiter).join(replaceDelimiter);
}


console.log(replaceSpaces('1222 2333 3erer fff fff' , ' ', '***'));
