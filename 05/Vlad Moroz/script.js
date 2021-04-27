function showNotification(options) {
    const div = document.createElement('div');
    div.className = "notification";
    div.textContent = options;
    document.body.prepend(div);
    setTimeout(() => div.remove(), 1500);
}

showNotification('Message')

// ----------------------------------------------------------------------------------------------

const ul = document.body.firstElementChild.nextElementSibling;

for (let i = 0; i < ul.children.length; i++) {
    if (ul.children[i].firstElementChild.textContent.includes('http://')) {
    ul.children[i].firstElementChild.style.color = 'red';
    }
}

// ----------------------------------------------------------------------------------------------


function addTable(rows, cols, div) {
    const myTable = document.getElementById(div);
  
    const table = document.createElement('table');
    table.border = '1';
  
    const tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
  
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        tableBody.appendChild(tr);
  
      for (let j = 0; j < cols; j++) {
        const td = document.createElement('td');
        td.style.padding = '5px'
        td.innerText = `Cell ${i} , ${j}`;
        tr.appendChild(td);
      }
    }
    myTable.appendChild(table);
  }
  addTable(3, 4, 'myTable');
