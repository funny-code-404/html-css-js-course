elem.onclick = function(event) {
    if ((event.clientX > 395 && event.clientX < 405) && (event.clientY > 310 && event.clientY < 320)) {
        alert("Ура! Клад!")
    } else {
        alert("Пусто! Поищи ещё!")
    }

    console.log(event.clientX + ":" + event.clientY);
}