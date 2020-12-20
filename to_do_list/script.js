class toDoList {
    constructor ( { text, handler } ) {
        this.text = text;
      //  this.handler = handler;
    }

deleteTask() {
    elem.style.display = 'none';
}

render() {
    const newTask = document.createElement('div');
    const container = document.getElementById('container');
    newTask.style.width = '400px'
    newTask.style.height = '100px';
    newTask.style.border = '3px solid black'
    newTask.style.position = 'relative';
        const deleteTask = document.createElement('div');
        deleteTask.innerHTML = '&#10060;';
        deleteTask.style.position = 'absolute'; 
        deleteTask.style.right = '0';
        deleteTask.style.top = '0';   
        deleteTask.addEventListener('click', deleteTask);
    newTask.innerHTML = this.text;
    container.appendChild(newTask);
    newTask.appendChild(deleteTask);
     
}

}

const addTask = () => {
    const inputTask = document.getElementById('task');
    console.log(inputTask.value);
    const task = new toDoList({
        text: inputTask.value,
     //  handler: deleteTask,
    });

    task.render();
}


const addButton = document.getElementById('button');
addButton.addEventListener('click', addTask);