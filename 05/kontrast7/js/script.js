const ul = document.body.lastElementChild.previousElementSibling;

const li1 = ul.children[0].firstElementChild;
const li2 = ul.children[1].firstElementChild;
const li3 = ul.children[2].firstElementChild;
const li4 = ul.children[3].firstElementChild;

li1.style.color = 'red';
li2.style.color = 'red';
li3.style.color = 'red';
li4.style.color = 'red';


// решение циклом
for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].firstElementChild.style.color = 'red';
}


// пропадающий блок
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
    constructor(id, text, container = document.body, status) {
        this.td = document.createElement('td');
        this.td.id = id;
        this.td.innerHTML = text;
        this.render(container);
        this.status = status;
        this.setStyles();
    }

    render(container) {
        container.appendChild(this.td);
    }

    setStyles() {
        switch (this.status) {
            case 'primary':
                return this.td.classList.add('primary');
            case 'warning':
                return this.td.classList.add('warning');
            case 'error':
                return this.td.classList.add('error');
            default:
                return this.td.classList.add('default');
        }
    }
}

function createTd(countTd, text, way, status = 'default') {
    for (let i = 1; i <= countTd; i++) {
        const t = new Td(`idTd${i}`, text, way, status);
    }
    return countTd;
}

const tdCount = createTd(6, "1234", main, 'error');


class Tr {
    constructor(id, text, container = document.body, status) {
        this.tr = document.createElement('tr');
        this.tr.id = id;
        this.tr.innerHTML = text;
        this.render(container);
        this.status = status;
        this.setStyles();
    }
    render(container) {
        container.appendChild(this.tr);
    }
    setStyles() {
        switch (this.status) {
            case 'primary':
                return this.tr.classList.add('primary');
            case 'warning':
                return this.tr.classList.add('warning');
            case 'error':
                return this.tr.classList.add('error');
            default:
                return this.tr.classList.add('default');
        }
    }
}


function createTr(countTr, text = '', status = 'default') {
    for (let i = 1; i <= tdCount; i++) {
        for (let j = 1; j <= countTr; j++) {
            let string = `idTd${i}`;
            let object = eval("(" + string + ")");
            const tr = new Tr(`idTr${i}`, text, object, status);

        };
    };
}
createTr(6, 'ячейка');