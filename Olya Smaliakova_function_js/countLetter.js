/*2а. Написать функцию, котора считает все указанные симоволы в строке, например: getCount("Строка", "a") - должна вернуть 1.*/

function countLetter (word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        } else {
            continue;
        }
    }
    console.log(count);
}
countLetter("ahAhaaaAhAAAa", "a");