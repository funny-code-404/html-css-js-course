const container = document.getElementById("container");
const navigation = document.getElementById("navigation");

const hashes = {
  toDoList: toDoList,
  calendar: calendar,
  info: info,
};

const render = (hash) => {
  switch (hash) {
    case "toDoList": {
      return renderToDoListPage();
    }
    case "calendar": {
      return renderCalendarPage();
    }
    case hashes.info: {
      return renderInfoPage();
    }
  }
};

window.onhashchange = () => {
  const path = window.location.hash.slice(1);
  render(path);
};

navigation.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "A") {
    window.location.hash = e.target.id;
  }
});

const contentContainer = document.getElementById("contentContainer");

const renderToDoListPage = () => createToDoList(contentContainer);
const renderCalendarPage = () => createCalendar(contentContainer.id, 10, 2020);
const renderInfoPage = () => console.log(1);

render(window.location.hash.slice(1));
