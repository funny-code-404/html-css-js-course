const map = document.getElementById('map');
map.addEventListener('click', handleClick);

function handleClick(e) {
    if (e.clientX > 245 && e.clientX < 260 && e.clientY > 155 && e.clientY < 175){
        alert('Вы нашли сокровище!')
    }
    if (e.clientY > 20 && e.clientY < 155){
        alert('Ищи ниже.')
    }
    if (e.clientY > 175 && e.clientY < 370){ 
        alert('Ищи выше.')
    }
    if (e.clientX > 260 && e.clientX < 475){ 
        alert('Ищи левее.')
    }
    if (e.clientX > 80 && e.clientX < 245){ 
        alert('Ищи правее.')
    }
    console.log(`X: ${e.clientX}`);
    console.log(`Y: ${e.clientY}`)
};