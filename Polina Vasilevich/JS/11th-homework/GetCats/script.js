const response = fetch("https://cat-fact.herokuapp.com/facts");

const getDateFromStr = function (str) {
  const subStr = str.slice(0, str.indexOf("T"));
  const date = new Date(subStr);
  return date.toLocaleDateString("ru-RU");
};

const createArticle = (data) => {
  const container = document.getElementById("container");

  data.forEach((review) => {
    const article = document.createElement("article");
    article.classList.add("article-view");

    const text = document.createElement("p");
    text.innerHTML = review.text;

    const dateCreateWithTime = review.createdAt;
    const dateCreate = document.createElement("span");
    dateCreate.innerHTML = `Date of creation: ${getDateFromStr(
      dateCreateWithTime
    )}`;

    dateCreate.classList.add("font-view");
    dateCreate.classList.add("block-position");
    dateCreate.style.left = "20px";

    const dateUpdateWithTime = review.updatedAt;
    const dateUpdate = document.createElement("span");
    dateUpdate.innerHTML = `Date of change: ${getDateFromStr(
      dateUpdateWithTime
    )}`;

    dateUpdate.classList.add("font-view");
    dateUpdate.classList.add("block-position");
    dateUpdate.style.right = "20px";

    article.appendChild(text);
    article.appendChild(dateCreate);
    article.appendChild(dateUpdate);
    container.appendChild(article);
  });
};
response.then((res) => res.json()).then((result) => createArticle(result));
