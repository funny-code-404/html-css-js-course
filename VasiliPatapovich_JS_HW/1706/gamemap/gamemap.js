// Написать базовую реализацию игры "Остров сокровищ"

alert("You need to find something , may be money my be not ...");

alert("Let start gamemap. Press left mouse button  on a map and find something ");



const message = document.querySelector("body > h1");

const yourmap = document.querySelector("#yourmap");
yourmap.addEventListener('click', function() {
    message.innerHTML = 'Do it again!';
    setTimeout(() => {
      message.innerHTML = 'You need to find something '  
    }, 300);
} )
const treasure = document.querySelector("#treasure");
treasure.addEventListener('click', function() {
    alert('You got it ! Congs !');
    message.remove();  
    alert('Good luck');
}); 


