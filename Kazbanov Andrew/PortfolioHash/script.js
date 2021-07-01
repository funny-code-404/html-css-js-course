function renderAbout() {
    
    content.innerHTML = "<img src = './img/1.jpg' class='img'>";
    const text = document.createElement('P');
    text.innerHTML = 'Per aspera ad astra';
    content.appendChild (text);
  }
  
  function renderTodolist() {
    content.innerHTML =  "";
    
const main = document.createElement('MAIN');
content.appendChild(main);
main.classList.add('container');
const h1 = document.createElement('H1');
const div = document.createElement('DIV');
const input = document.createElement('INPUT');
const button = document.createElement('BUTTON');
const ol = document.createElement('OL');
main.appendChild (h1);
h1.innerHTML='To do list';
main.appendChild (div);
div.appendChild(input);
input.setAttribute('id','task');
input.setAttribute('type',"");
input.setAttribute('value',"");
div.appendChild(button);
button.setAttribute('id','add');
button.innerHTML = 'Enter';
main.appendChild (ol);
ol.setAttribute('id','ol');

function letMark() { 
  const textMark = document.getElementById("task").value;
  const Li = document.createElement('Li');
  const text = document.createTextNode(textMark);
ol.appendChild(Li)
Li.appendChild(text);
const removeButton = document.createElement('button');
removeButton.innerHTML = 'Not performed';
removeButton.classList.add('notPerformed');
Li.appendChild(removeButton);
document.getElementById("task").value = '';
removeList(removeButton)
};

const taskText = document.querySelector("#add");
taskText.addEventListener('click', letMark);

function removeList(e){
e.addEventListener('click', (event) => {
  e.innerHTML = 'Performed'
  e.classList.add('performed');
  // e.stopPropagation();
})
}




  }
  
  function renderCalendar() {
    content.innerHTML = 'CALENDAR';
  }
  
  function render(hash) {
    switch (hash.slice(1)) {
      case 'about':
        return renderAbout();
      case 'todo':
        return renderTodolist();
      case 'calendar':
        return renderCalendar();
    }
  }
  
  nav.addEventListener('click', (e) => {
    e.preventDefault();
  
    if (e.target.tagName === 'A') {
      location.hash = e.target.id;
    }
  });
  
  window.onhashchange = () => {
    render(location.hash);
  };
  
  render(location.hash);