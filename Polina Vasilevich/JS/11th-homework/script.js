class Block {
  constructor({ label, eventType, handler, color, container }) {
    this.label = label;
    this.eventType = eventType;
    this.handler = handler;
    this.color = color;
    this.container = container;
  }

  addStyles(block) {
    block.style.backgroundColor = this.color;
    return block;
  }

  render() {
    const block = document.createElement("div");

    block.id = Math.floor(Math.random() * 100);
    block.innerHTML = this.label;
    block.style.display = "inline-block";
    block.style.padding = "10px";

    const customBlock = this.addStyles(block);

    const container = document.getElementById(this.container);
    container.appendChild(block);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&times";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.background = "transparent";
    deleteButton.style.outline = "none";
    block.appendChild(deleteButton);

    block.addEventListener(this.eventType, this.handler);
  }
}

const onClickHandler = (e) => {
  e.currentTarget.remove();
};

const getRandomColor = (arrColors) => {
  const rand = Math.floor(Math.random() * arrColors.length);
  return arrColors[rand];
};

const colors = ["red", "green", "yellow"];

const onAddNewElement = () => {
  const someBlock = new Block({
    label: "some label",
    eventType: "click",
    handler: onClickHandler,
    color: getRandomColor(colors),
    container: "container",
  });
  someBlock.render();
};

const button = document.getElementById("add");
button.addEventListener("click", onAddNewElement);
