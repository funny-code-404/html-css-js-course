function renderMain() {
      content.innerHTML = 'MAIN';
      // document.open();
      document.write ('MAIN'.link ('index.html'));
      // document.close();
    }

function renderTodo() {
    content.innerHTML = 'TODO';
   
    document.write ('TODO'.link ('todo.html'));
  }
  
  function renderCalendar() {
    content.innerHTML = 'CALENDAR';
    document.write ('CALENDAR'.link ('calendar.html'));
  }
  
  function renderAboutme() {
    content.innerHTML = 'ABOUT ME';
    document.write ('ABOUT ME'.link ('aboutme.html'));
  }
  
  function render(hash) {
    switch (hash.slice(1)) {
      case 'main':
        return renderMain();
      case 'todo':
        return renderTodo();
      case 'calendar':
        return renderCalendar();
      case 'aboutme':
        return renderAboutme();
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
  

