import reviewsApi from "../../services/ex/api/reviews.service";

const render = (data) => {};

export const getData = () => reviewsApi.getReviews().then((data) => console.log(data));

export const createData = () => {};

const init = () => {};

init();
