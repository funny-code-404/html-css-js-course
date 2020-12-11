const cross = document.getElementById("cross");
const map = document.getElementById("map");
const result = document.getElementById("logs");
const countAttempts = document.getElementById("attempts");
let counter = 0;

function setCrossPosition() {
  const crossWidth = cross.clientWidth;
  const crossHeight = cross.clientHeight;

  const mapWidth = map.clientWidth;
  const mapHeight = map.clientHeight;

  const positionLeft = `${Math.floor(
    Math.random() * (mapWidth - crossWidth)
  )}px`;
  const positionTop = `${Math.floor(
    Math.random() * (mapHeight - crossHeight)
  )}px`;

  return [positionLeft, positionTop];
}

const positionCross = setCrossPosition();
cross.style.left = positionCross[0];
cross.style.top = positionCross[1];

function getCordinatesCross() {
  const crossClientRect = cross.getBoundingClientRect();
  const crossClientX1 = crossClientRect.x;
  const crossClientX2 = crossClientRect.right;
  const crossClientY1 = crossClientRect.y;
  const crossClientY2 = crossClientRect.bottom;

  return [crossClientX1, crossClientX2, crossClientY1, crossClientY2];
}

const cordinatesCross = getCordinatesCross();
const [
  crossClientX1,
  crossClientX2,
  crossClientY1,
  crossClientY2,
] = cordinatesCross;

function handleClick(e) {
  const userClientX = e.clientX;
  const userClientY = e.clientY;

  const conditionForX =
    userClientX >= crossClientX1 && userClientX <= crossClientX2;
  const conditionForY =
    userClientY >= crossClientY1 && userClientY <= crossClientY2;

  const conditionForLeft = crossClientX1 < userClientX;
  const conditionForTop = crossClientY1 < userClientY;

  function getResult() {
    let logText = "";
    let message = "Miss! Try on the ";
    if (conditionForX && conditionForY) {
      logText = "Congratulations! You won!!!";
      alert("Congratulations! You won!!!");

      map.removeEventListener("click", handleClick);

      return logText;
    } else {
      if (!conditionForX) {
        message += conditionForLeft ? "left " : "right ";
      }

      if (!conditionForY) {
        message += conditionForTop ? "top " : "bottom ";
      }

      logText = `Miss. Your click x: ${userClientX}px y: ${userClientY}px`;
      alert(message);
      return logText;
    }
  }

  const text = getResult();
  const p = document.createElement("p");
  p.innerHTML = text;
  result.appendChild(p);

  countAttempts.innerHTML = `Number of attempts: ${++counter}`;
}

map.addEventListener("click", handleClick);
