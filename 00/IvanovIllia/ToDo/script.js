function checkSpace(){
    let textSpace = document.getElementById("task").value;
    if (textSpace == ''){ 
        alert('Enter the task');
    }else {
        const textSpace = document.getElementById("task").value;
        const taskList = document.createElement('li');
        const text = document.createTextNode(textSpace);
        ol.appendChild(taskList)
        taskList.appendChild(text);
        let checkButton = document.createElement('button');
        checkButton.innerHTML = 'In Progress';
        checkButton.classList.add('inProgress');
        taskList.appendChild(checkButton);
        document.getElementById("task").value = '';
        markList(checkButton)
        }
}





const checkText = document.querySelector("body > main > div > button"); 

checkText.addEventListener('click', checkSpace)

function markList(checkButton){
    checkButton.addEventListener('click', (event) => {
        let taskStatus = checkButton.classList;
        if (taskStatus == 'inProgress') {
            checkButton.classList.remove('inProgress');
            checkButton.classList.add('done');
            checkButton.innerHTML = 'Done';
        }
        else {
            checkButton.classList.remove('done');
            checkButton.classList.add('inProgress');
            checkButton.innerHTML = 'In Progress';
        }
    })
}


    