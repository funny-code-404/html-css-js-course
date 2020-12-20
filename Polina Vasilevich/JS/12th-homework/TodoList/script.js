class Form {
  constructor(container) {
    this.container = container;
  }

  render() {
    // const form = document.createElement("form");
    // const input = document.createElement("input");
    // input.type = "text";
    // input.id = "textTask";
    // input.name = "text";
    // input.classList.add("font-size-large", "block-view");
    // input.placeholder = "Enter the text of the task...";

    this.container.innerHTML = `<form class="form">
                            <input type="text" id="textTask" class="font-size-large block-view"
                            placeholder="Enter the text of the task..." name="text">
                            <button id="addButton" class="font-size-large block-view">Add task</button>
                         </form>`;

    // form.innerHTML = `<input type="text" id="textTask" class="font-size-large block-view"
    // placeholder="Enter the text of the task..." name="text">
    // <button id="addButton" class="font-size-large block-view">Add task</button>`;
    // this.container.appendChild(form);
  }
}

class TaskBlock {
  constructor({ label, container, color }) {
    this.label = label;
    this.container = container;
    this.color = color;
  }

  setId(block) {
    block.id = block.previousElementSibling
      ? (block.id = +block.previousElementSibling.id + 1)
      : 1;
  }

  render() {
    const container = document.getElementById("contentContainer");
    const taskContainer = document.createElement("div");
    const blockTask = document.createElement("div");
    const textTask = this.label.value;
    blockTask.innerHTML = textTask;

    blockTask.classList.add("block-task-view");
    blockTask.style.background = this.color;

    taskContainer.appendChild(blockTask);
    container.appendChild(taskContainer);
    this.setId(blockTask);
    return blockTask;
  }
}

class Button {
  constructor({ symbol, eventType, handler, container }) {
    this.eventType = eventType;
    this.handler = handler;
    this.container = container;
    this.symbol = symbol;
  }

  render() {
    const button = document.createElement("p");
    button.innerHTML = this.symbol;
    button.addEventListener(this.eventType, this.handler);

    button.classList.add("button-view");
    this.container.appendChild(button);
  }
}

class ErrorHandler {
  constructor(dataField) {
    this.dataField = dataField;
  }

  changeColorField() {
    this.dataField.style.border = "2px solid red";
  }

  setNativeColorField() {
    this.dataField.style.borderColor = "black";
  }

  addError() {
    const error = document.createElement("p");
    error.id = "error";
    error.innerHTML = `Please, fill out this field.`;
    error.classList.add("error-view");
    this.dataField.before(error);
  }

  removeError() {
    const error = document.getElementById("error");
    error.remove();
  }
}

const createToDoList = function (container) {
  const mainBlock = document.getElementById(container.id);
  console.dir(mainBlock);
  const form = new Form(mainBlock);
  form.render();

  const getRandomColor = () => {
    var r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
  };

  const onDeleteBlockTask = (e) => {
    e.target.parentNode.remove();
  };

  const onAddNewElement = (e) => {
    e.preventDefault();

    const textTask = document.getElementById("textTask");
    const error = new ErrorHandler(textTask);

    if (textTask.value.length) {
      if (document.getElementById("error")) {
        error.removeError();
        error.setNativeColorField();
      }

      const newTask = new TaskBlock({
        label: textTask,
        container: container.id,
        color: getRandomColor(),
      });

      const task = newTask.render();

      const button = new Button({
        symbol: "&times",
        eventType: "click",
        handler: onDeleteBlockTask,
        container: task,
      });

      button.render();
    } else if (!document.getElementById("error")) {
      error.addError();
      error.changeColorField();
    }
  };
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", onAddNewElement);
};
