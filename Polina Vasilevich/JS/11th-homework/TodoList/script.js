class TaskBlock {
  constructor({ label, container, color }) {
    this.label = label;
    this.container = container;
    this.color = color;
  }

  addStyles(block) {
    const styleBlock = block.style;
    styleBlock.width = "inherit";
    styleBlock.marginTop = "30px";
    styleBlock.padding = "50px";
    styleBlock.border = "1px solid black";
    styleBlock.borderRadius = "10px";
    styleBlock.fontSize = "20px";
    styleBlock.position = "relative";

    styleBlock.background = this.color;
    return block;
  }

  render() {
    const blockTask = document.createElement("div");
    blockTask.id = Math.floor(Math.random() * 100);

    const textTask = this.label.value;
    const container = document.getElementById(this.container);
    blockTask.innerHTML = textTask;

    const blockTaskWithStyles = this.addStyles(blockTask);
    container.appendChild(blockTaskWithStyles);

    return blockTaskWithStyles;
  }
}

class Button {
  constructor({ symbol, eventType, handler, container }) {
    this.eventType = eventType;
    this.handler = handler;
    this.container = container;
    this.symbol = symbol;
  }

  addStyles(button) {
    button.style.fontSize = "40px";
    button.style.padding = "0";
    button.style.margin = "0";
    button.style.position = "absolute";
    button.style.top = "0";
    button.style.right = "0";

    button.style.cursor = "pointer";

    return button;
  }

  render() {
    const button = document.createElement("p");
    button.innerHTML = this.symbol;
    button.addEventListener(this.eventType, this.handler);

    const buttonWithStyles = this.addStyles(button);
    this.container.appendChild(buttonWithStyles);
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

  addStyles(error) {
    error.style.margin = 0;
    error.style.color = "red";
    error.style.fontSize = "18px";
  }

  addError() {
    const error = document.createElement("p");
    error.id = "error";
    error.innerHTML = `Please, fill out this field.`;
    this.addStyles(error);
    this.dataField.before(error);
  }

  removeError() {
    const error = document.getElementById("error");
    error.remove();
  }
}

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
      container: "taskContainer",
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
