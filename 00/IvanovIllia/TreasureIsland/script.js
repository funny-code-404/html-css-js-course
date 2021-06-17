//Прописываем в DOM

let TM = document.createElement ('div');

TM.id = TrMap;

let MM = document.createElement ('div');

MM.id = mapMark;

TM.appendChild(MM);

document.body.appendChild(TM);


//Пишем события
let a = document.getElementById('mapMark');
a.onclick = function () {
    alert('Нашёл');
};

let b = document.getElementById('TrMap')

b.onclick = function() {
    alert('Мимо! Попробуй ещё!');
};







