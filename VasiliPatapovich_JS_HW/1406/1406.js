// Покрасить внешние ссылки в красный цвет
// {/* <ul>
//         <li><a href="http://google.com">http://google.com</a></li>
//         <li><a href="/tutorial">/tutorial.html</a></li>
//         <li><a href="local/path">local/path</a></li>
//         <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//         </ul> */}



// var elements = document.getElementsByTagName('a');

// for (var i = 0; i < elements.length; i++) {
//     if (elements.className.split(/\s+/).indexOf('red') !== -1) {
//         elements[i].style.color = 'red';
//     }
// }





// document.getElementsByTagName('a').style.color = "red";






// //Напишите функцию showNotification(options), которая создаёт
// уведомление: <div class="notification"> с заданным содержимым.
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

// function showNotification({ top = 10, right = 30, className, html }) {

//     let notification = document.createElement('div');
//     notification.className = "notification";
//     if (className) {
//         notification.classList.add(className);
//     }

//     notification.style.top = top + 'px';
//     notification.style.right = right + 'px';

//     notification.innerHTML = html;
//     document.body.append(notification);

//     setTimeout(() => notification.remove(), 1500);
// }

// setInterval(() => {
//     showNotification({
//         top: 50,
//         right: 50,
//         html: 'Axtyng ',
//         className: "message"
//     });
// }, 2000);







// реализовать игру "Остров сокровищ"
// при клике на крестик - выводить сообщение о нахождении клада и его координатах
// при клике вне крестика - выводить сообщение, вы промахнулись, попробуйте еще
// кликать модно не точно в крестик, а применять диапазон
// погрешность + /- 5
// ДОПОЛНИТЕЛЬНО для тех, кто справится:
// найти карту без крестика, а местонахождение клада генерировать рандомно функцией Math.random()
// при клике вне крестика - высчитывать положение клика и в зависимости от его координат говорить - кликните левее и ниже, правее и выше и т.д.

in process

// Создать кнопку, которая при клике будет создавать тэг h1  page 13
// с любым сообщением

document.body.onload = addElement;
  var my_div = newDiv = null;


const button = document.querySelector ('.butt');
let handleclick = function handleclick () {
    function addElement() {   // Создаём новый элемент div

        var newDiv = document.createElement("div");
            newDiv.innerHTML = "<h1>1234567</h1>";
    
        my_div = document.getElementById("org_div1");   // Добавляем только что созданный элемент в дерево DOM
        document.body.insertBefore(newDiv, my_div);
      } 
}; 
button.addEventListener ('click', handleclick );


// Создать кнопку, обработчик которой отработает лишь 1
// раз
const button = document.querySelector ('.but');
let handleclick = function handleclick () {
    alert ('was clicked');
};
button.addEventListener ('click', handleclick );
button.removeEventListener ('click', handleclick );


// САМОСТОЯТЕЛЬНО ДОМА: узнать, какие события не всплывают