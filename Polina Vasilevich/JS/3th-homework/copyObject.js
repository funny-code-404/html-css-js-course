// 8. Написать функцию, которая копирует один объект в другой
function copyObject(obj, target) {
    for(let key in obj) {
        target[key] = obj[key];
    }
    return target;
}

const books = {
    name: 'JavaScript for child',
    autor: 'Nick Morgan',
    year: 2016,
    pages: 393,
}

newBooks = {};

copyObject(books, newBooks);
newBooks.year = 2020;
console.log(`books.year --- ${books.year}`);
console.log(`newBooks.year --- ${newBooks.year}`);


