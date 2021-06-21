
function letMark() { 
    const textMark = document.getElementById("task").value;
    const Li = document.createElement('Li');
ol.append(Li)
Li.innerHTML = textMark;
const removeButton = document.createElement('button');
removeButton.innerHTML = 'Done';
removeButton.classList.add('delete');
Li.appendChild(removeButton);
document.getElementById("task").value = '';

};

const taskText = document.querySelector("body > main > div > button");
taskText.addEventListener('click', letMark);






