function renderMain() {
  content.innerHTML = 'MAIN';
 
  document.write ('MAIN'.link ('index.html'));
}



function render(hash) {
switch (hash.slice(1)) {
  case 'main':
    return renderMain();
  
}
}

nav.addEventListener('click', (e) => {
e.preventDefault();

if (e.target.tagName === 'A') {
  location.hash = e.target.id;
}
});

window.onhashchange = () => {
render(location.hash);
};

render(location.hash);