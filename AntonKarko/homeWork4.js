// 1. используя урл https://jsonplaceholder.typicode.com/todos запросить данные с сервера и вывести в консоль;

let xhr = new XMLHttpRequest();
xhr.open('Get', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();
xhr.onload = function () {
    console.log(`Загружено ${xhr.response}`);
};

// 2. запросить данные 2-мя способами XMLHttpRequest и fetch
let xhr = new XMLHttpRequest();
xhr.open('Get', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();

let url = await fetch('https://jsonplaceholder.typicode.com/todos');

// 3. почитать на сайте, как можно создавать свои элементы на этом сервере и создать несколько своих review/todo (под своим именем, метод POST)
let user = {
    name: 'Anton',
    age: 33,
};

let response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

// 4.  вывести запрошенные данные не в консоль, а создать маркированный список, который при ответе с сервера заполняется/создаетмя с данными

async function getUsers(names) {
    let arrays = [];
  
    for(let name of names) {
      let array = fetch(`https://jsonplaceholder.typicode.com/${todo}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(array);
    }
  
    let results = await Promise.all(arrays);
  
    return results;
  };