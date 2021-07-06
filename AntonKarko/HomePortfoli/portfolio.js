
function renderHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  let element = document.createElement("div");
  element.id = 'to-do-list';
  content.appendChild(element);
const el = document.getElementById('to-do-list');
const ul = document.createElement('ul');
el.classList.add('ul');
el.appendChild(ul);

const input = document.createElement('input');
input.id = 'text';
input.type = "text";
el.appendChild(input);
  

let todos = [];

function render (todos) {
    ul.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li');
        li.classList.add('li');
        const textSpan = document.createElement('span');
        textSpan.classList.add('todo-text');
        textSpan.innerHTML = todos[i].value;

        const buttonClose = document.createElement('button');
        textSpan.appendChild(buttonClose);
        buttonClose.classList.add('close');
        buttonClose.id = todos[i].id;

        buttonClose.addEventListener('click', function (e) {
            deleteTodo(e.target.id);
        })

        ul.appendChild(li).append(textSpan);
    };
}

function createTodo() {
    const todo = {
        id: todos.length + 1,
        value: input.value,
    }

    todos.push(todo);

    render(todos);
}

function deleteTodo(id) {
    todos = todos.filter((item) => item.id !== Number(id));
    render(todos);
}

input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        createTodo();
        text.value = '';
    }
});
};

function renderAbout() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  let element = document.createElement("div");
  element.id = 'calendar';
  content.appendChild(element);
  

    function createCalendar(htmlElement, year, month) {

        let mon = month - 1; 
        let d = new Date(year, mon);
      
        let table = '<table><tr><th>Mondey</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr><tr>';
      
        for (let i = 0; i < getDay(d); i++) {
          table += '<td></td>';
        }
      
        while (d.getMonth() == mon) {
          table += '<td>' + d.getDate() + '</td>';
      
          if (getDay(d) % 7 == 6) { 
            table += '</tr><tr>';
          }
      
          d.setDate(d.getDate() + 1);
        }
      
        if (getDay(d) != 0) {
          for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
          }
        }
      
        table += '</tr></table>';
      
        htmlElement.innerHTML = table;
      }
      
      function getDay(date) { 
        let day = date.getDay();
        if (day == 0) day = 7; 
        return day - 1;
      }
      
      createCalendar(calendar, 2021, 6);
      
};

function renderPortfolio() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  let element = document.createElement("div");
  element.id = 'portfolio'; 
  element.classList.add('portfolio');
  content.appendChild(element);
  const spanText = document.createElement('span');
  spanText.innerHTML = '<h1>О себе...</h1>';
  content.appendChild(spanText);
  spanText.classList.add('spanText');
  const text = document.createElement('p');
  text.classList.add('p');
  spanText.appendChild(text);
  text.innerHTML = '<h2>33 Года.</br> Работаю на жд. по професии "осмотрщик-ремонтник вагонов"</br> окончил Пту, ГГКЖТ, БелГУТ. (Магистр технических наук)</br> Решил сменить професиию на IT Front end</br> (так как нет дальнейшего роста и развития в нынешней професии)</br> </h2>'

};

function render (hash) {
    switch(hash.slice(1)) {
        case 'home': 
            return renderHome();
        case 'about':
            return renderAbout();
        case 'portfolio':
            return renderPortfolio();
    }
}

nav.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'A') {
        location.hash = e.target.id;
    };
});

window.onhashchange = () => {
    render(location.hash);
};

render(location.hash);