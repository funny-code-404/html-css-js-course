const message = document.querySelector("body > h1");

const map = document.querySelector("#map");
map.addEventListener('click', function() {
    message.innerHTML = 'Копайте дальше!';
    setTimeout(() => {
      message.innerHTML = 'Найди сундук мертвеца!'  
    }, 1500);
} )
const gold = document.querySelector("#gold");
gold.addEventListener('click', function() {
    alert('Примите поздравления, теперь вы сказочно богаты!');
    message.remove();  
});