const cross = document.getElementById("cross");
const map = document.getElementById("map");
const result = document.getElementById("logs");
const countAttempts = document.getElementById("attempts");

let logText = "";
let counter = 0;

function handleClick(e) {
  counter++;

  const crossClientRect = cross.getBoundingClientRect();

  const crossClientX1 = crossClientRect.x;
  const crossClientX2 = crossClientRect.right;
  const crossClientY1 = crossClientRect.y;
  const crossClientY2 = crossClientRect.bottom;

  const userClientX = e.clientX;
  const userClientY = e.clientY;

  const conditionForX =
    userClientX >= crossClientX1 && userClientX <= crossClientX2;
  const conditionForY =
    userClientY >= crossClientY1 && userClientY <= crossClientY2;

  const conditionForLeft = crossClientX1 < userClientX;
  const conditionForTop = crossClientY1 < userClientY;

  if (conditionForX && conditionForY) {
    logText += "Congratulations! You won:)<br>";

    alert("Congratulations! You won:)");
  } else {
    if (!conditionForLeft && conditionForY) {
      logText += "right<br>";
    } else if (conditionForLeft && conditionForY) {
      logText += "left<br>";
    } else if (!conditionForTop && conditionForX) {
      logText += "bottom<br>";
    } else if (conditionForTop && conditionForX) {
      logText += "top<br>";
    } else if (!conditionForLeft && !conditionForTop) {
      logText += "right and bottom<br>";
    } else if (conditionForLeft && !conditionForTop) {
      logText += "left and bottom<br>";
    } else if (conditionForLeft && conditionForTop) {
      logText += "left and top<br>";
    } else if (!conditionForLeft && conditionForTop) {
      logText += "rigth and top<br>";
    }
  }

  countAttempts.innerHTML = `Number of attempts: ${counter}`;
  result.innerHTML = logText;
}

map.addEventListener("click", handleClick);
