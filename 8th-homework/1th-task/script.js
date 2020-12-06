const children = document.body.firstElementChild.children;
const countChildren = children.length;

for (let i = 0; i < countChildren; i++) {
  let elementsChildren = children[i].children;
  for (let j = 0; j < elementsChildren.length; j++) {
    if (i === j) {
      elementsChildren[j].style.backgroundColor = "red";
    }
  }
}
