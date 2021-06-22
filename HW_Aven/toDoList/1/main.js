const addTaskBtnn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks;
//если в localStorage  есть значения, то они отправляются в tasks
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElems = [];

function Task(description) {
	this.description = description;
	this.completed = false;
};

const createTemplate = (task, index) => {
	return `
	<div class="todo-item ${task.completed ? 'checked' : ''}">
	<div class="description">${task.description}</div>
		<div class="buttons">
			<input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
			<button onclick="deleteTask(${index})" class="btn-delete">Delete</button>
		</div>
   </div>
	`
};

const filterTasks = () => {
	const activeTasks = tasks.lenght && tasks.filter(item => item.completed == false);
	const completedTasks = tasks.lenght && tasks.filter(item => item.completed == true);
	tasks = [...activeTasks, ...completedTasks];
};

const fillHtmlList = () => {
	todosWrapper.innerHTML = ""; // обнуляем значения
	if (tasks.lenght > 0) {
		filterTasks();
		tasks.forEach((item, index) => {
			todosWrapper.innerHTML += createTemplate(item, index); //динамически подставляем в tamplate значнеия
		});
		todoItemElems = document.querySelectorAll(`.todo-item`);
	}
};

fillHtmlList(); //при обнавлении страницы все остается, обращается к tasks


const updateLocal = () => {  // обновляется каждый раз значение нашего tasks
	localStorage.setItem('tasks', JSON.stringify(tasks)); // в строку
};

const completeTask = index => {
	tasks[index].completed = !tasks[index].completed; // будет брать иеммнно тот элемент по которому кликаю
	if (tasks[index].completed) {
		todoItemElems[index].classList.add('checked');
	} else {
		todoItemElems[index].classList.remove('checked');
	}
	updateLocal(); //отправляем массив tasks в local
	fillHtmlList();
};

addTaskBtnn.addEventListner('click', () => { //берем значнеи при клике от пользователя и создаем новый обек и отправляем в tasks
	tasks.push(new Task(deskTaskInput.value));
	updateLocal();
	fillHtmlList();
	deskTaskInput.value = '';
});


const deleteTask = index => {
	todoItemElems[index].classListadd('delition');
	setTimeout(() => {
		tasks.splice(index, 1);
		updateLocal();
		fillHtmlList();
	}, 500)
}