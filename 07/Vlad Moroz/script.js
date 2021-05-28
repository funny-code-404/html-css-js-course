const url = "https://quiet-spire-94328.herokuapp.com/reviews";

const name = document.querySelector("input[name=name]");
const email = document.querySelector("input[name=email]");
const review = document.querySelector("input[name=review]");
const addReview = document.getElementById("addButton");
const list = document.getElementById("todoList");

function createNode(element, classname) {
  const elem = document.createElement(element);
  elem.classList.add(classname);
  return elem
}

function append(parent, el) {
  return parent.appendChild(el);
}

function loadTodos() {
  clear();
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let reviews = json.reviews;
      return reviews.forEach((review) => {
        let card = createNode("div", "card");
        card.innerHTML = `<div class="card-title">${review.name}</div>
        <div class="card-subtitle">${review.email}</div>
        <div class="card-desc">${review.review}</div>`;

        let buttonDel = createNode("button", "todoDel");
        buttonDel.innerHTML = "Удалить";

        let buttonEdit = createNode("button", "todoEdit");
        buttonEdit.innerHTML = "Изменить";

        append(card, buttonEdit);
        append(card, buttonDel);
        append(list, card);
        deleteTodo(review.id);
        editTodo(review.id);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function clear() {
    name.value = "";
    email.value = "";
    review.value = "";
    list.innerHTML = "";
}

addReview.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      review: review.value,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      loadTodos();
    })
    .catch(function (error) {
      console.log(error);
    });
});

function deleteTodo(id) {
  const deleteBtn = document.querySelectorAll(".todoDel");
  deleteBtn.forEach((item) =>
    item.addEventListener("click", () => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          loadTodos();
        })
        .catch(function (error) {
          console.log(error);
        });
    })
  );
}

function editTodo(id) {
  const editBtn = document.querySelectorAll(".todoEdit");
  editBtn.forEach((item) =>
    item.addEventListener("click", () => {
      if(name.value && email.value && review.value){
      fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          review: review.value,
          id: id,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          loadTodos();
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        alert('Заполните все поля!');
      }
    })
  );
}

loadTodos();