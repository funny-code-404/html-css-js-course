const users = document.body.firstElementChild;

const sam = document.body.firstElementChild.nextElementSibling.lastElementChild;

const jane = document.body.firstElementChild.nextElementSibling.firstElementChild;
console.log(users, sam, jane);
//

const div3 = document.querySelector("body > main > div:nth-child(3)");
div3.classList.add('red');
const div4 = document.querySelector("body > footer > div:nth-child(1)");
div4.classList.add('red');
const div8 = document.querySelector("body > footer > div:nth-child(5)");
div8.classList.add('red');
const div12 = document.body.childNodes[7].lastElementChild;
div12.classList.add('red');
//

const show = function showNotification(){
    let div = document.createElement('div');
    div.className = 'notification';
    div.innerHTML = '<strong>Вас приветствует Андрей!</strong>';
    document.body.prepend(div);
    setTimeout(() => {
        div.remove()
    }, 1500);
}
show()
//

const linkColor = document.querySelectorAll("a");
for (let key of linkColor){
    key.classList.add('colorLink');
}
