// //Прописываем в DOM
// let TM = document.createElement ('div');

// TM.id = 'TrMap';

// let MM = document.createElement ('div');

// MM.id = 'mapMark';

// TM.appendChild(MM);

// document.body.appendChild(TM);


//Пишем события
const gold = document.querySelector("#mapMark");
const map = document.querySelector("#TrMap")

gold.addEventListener('click', () => {
    alert('Нашёл');
});

map.addEventListener('click', () => {
    alert('Мимо! Попробуй ещё!');
});
// gold.onclick = function () {
//     alert('Нашёл');
// };
// map.onclick = function() {
//     alert('Мимо! Попробуй ещё!');
// };







