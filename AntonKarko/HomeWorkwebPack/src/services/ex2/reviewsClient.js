import { mapReviews } from "../helpers";

const Reviews = (() => 
    class {
    constructor(client) {
        this.client = client;
    }

    getReviews = () => this.client.get().then(mapReviews);

    createReview = (path, data) => this.client.post(path, data);

    deleteReview = (path, data) => this.client.delete(path, data);    
})();

export default Reviews;