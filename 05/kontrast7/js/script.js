const ul = document.body.lastElementChild.previousElementSibling;

const li1 = ul.children[0].firstElementChild;
const li2 = ul.children[1].firstElementChild;
const li3 = ul.children[2].firstElementChild;
const li4 = ul.children[3].firstElementChild;

li1.style.color = 'red';
li2.style.color = 'red';
li3.style.color = 'red';
li4.style.color = 'red';


// решение массивом
for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].firstElementChild.style.color = 'red';
}



function showNotification(options) {
    let div = document.createElement('div');
    div.className = "notification";
    div.innerHTML = `<p>${options}</p>`;
    document.body.append(div);
    setTimeout(() => div.remove(), 1500);
}

showNotification('123')





// TABLE_______________________________________________
class Td {
    constructor(id, text, container = document.body) {
        this.td = document.createElement('td');
        this.td.id = id;
        this.td.innerHTML = text;
        this.render(container);
    }

    render(container) {
        container.appendChild(this.td);
    }
}
const td1 = new Td('i1', '1', main);
const td2 = new Td('i2', '2', main);
const td3 = new Td('i3', '3', main);
const td4 = new Td('i4', '4', main);


class Tr {
    constructor(id, text, container = document.body) {
        this.tr = document.createElement('tr');
        this.tr.id = id;
        this.tr.innerHTML = text;
        this.render(container);
    }

    render(container) {
        container.appendChild(this.tr);
    }
}
const tr1 = new Tr('id1', 'warning', i1);
const tr2 = new Tr('id2', 'warning', i1);
const tr3 = new Tr('id3', 'warning', i1);
const tr4 = new Tr('id4', 'warning', i1);


const tr5 = new Tr('id5', 'error', i2);
const tr6 = new Tr('id6', 'error', i2);
const tr7 = new Tr('id7', 'error', i2);
const tr8 = new Tr('id8', 'error', i2);

const tr9 = new Tr('id9', 'primary', i3);
const tr10 = new Tr('id10', 'primary', i3);
const tr11 = new Tr('id11', 'primary', i3);
const tr12 = new Tr('id12', 'primary', i3);

const tr13 = new Tr('id13', 'default', i4);
const tr14 = new Tr('id14', 'default', i4);
const tr15 = new Tr('id15', 'default', i4);
const tr16 = new Tr('id16', 'default', i4);