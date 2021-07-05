const textInput = document.getElementById('text');
const addButton = document.getElementById('add');
const result = document.getElementById('result');


let i = 0

addButton.addEventListener('click', (e) => {

    if (textInput.value === '') return
    createDeleteElements(textInput.value)
    textInput.value = ''
})

function createDeleteElements(value) {
    i++

    const li = document.createElement('li')
    const btn = document.createElement('btn')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'Удалить'
    li.appendChild(btn)

    btn.addEventListener('click', (e) => {
        i--
        task.textContent = i
        result.removeChild(li)

    })

    task.textContent = i

    result.appendChild(li)
}