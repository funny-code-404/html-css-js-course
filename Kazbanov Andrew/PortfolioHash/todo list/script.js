
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

const taskText = document.querySelector("body > main > div > button");
taskText.addEventListener('click', letMark);

function removeList(e){
e.addEventListener('click', (event) => {
  e.innerHTML = 'Performed'
  e.classList.add('performed');
  e.stopPropagation();
})
}


 




 







