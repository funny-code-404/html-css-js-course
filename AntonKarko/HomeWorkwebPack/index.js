

function render (hash) {
    switch(hash.slice(1)) {
        case 'home': 
            return renderHome();
        case 'about':
            return renderAbout();
        case 'portfolio':
            return renderPortfolio();
    }
}

nav.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'A') {
        location.hash = e.target.id;
    };
});

window.onhashchange = () => {
    render(location.hash);
};

render(location.hash);