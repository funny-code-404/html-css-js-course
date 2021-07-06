// import reviewsApi from "../../services/ex/api/reviews.service";
import Client from '../../services/ex2';

const {reviews: reviewsApi} = new Client();

const render = (data) => {
  const ul = document.createElement('ul');
  ul.id = 'list';

  data.forEach(({ id, name, review, email }) => {
    const li = document.createElement('li');
    li.id = id;

    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const del = document.createElement('button');

    h1.innerHTML = name;
    h2.innerHTML = email;
    p.innerHTML = review;
    del.innerHTML = 'Delete';

    del.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(id);
      reviewsApi.deleteReview('', { id }).then(() => {
        li.remove();
      });
    });

    li.appendChild(h1);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(del);

    ul.appendChild(li);
  });

  const reviews = document.getElementById('reviews');
  reviews.innerHTML = '';
  reviews.appendChild(ul);
};

export const getData = () => reviewsApi.getReviews().then(render);

export const createData = () => {
  const data = [...document.forms[0].elements].filter((input) => input.type === 'text').reduce((obj, item) => {
    obj [item.name] = item.value;

    return obj;
  }, {});

  reviewsApi.createReview('', data).then(getData);
};

const init = () => {
  const send = document.getElementById('send');
  send.addEventListener('click', e => {
    e.preventDefault();

    createData();
  })
};

init();
