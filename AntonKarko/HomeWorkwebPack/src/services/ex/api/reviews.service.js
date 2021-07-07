import api from '../axiosInstance';
import { mapReviews } from '../../helpers';

const reviewsApi = {
    getReviews: (path = '', config = {}) => {
        return api
        .get(`/reviews${path}`, config)
        .then(({data}) => mapReviews(data))
        .catch((error) => {
            throw error;
        })
    },
    createReview: (path = '', config = {}) => {
        return api
        .post(`/reviews${path}`, config)
        .then((data) => data)
        .catch((error) => {
            throw error;
        })
    },
    deleteReview: (path = '', data = {}) => {
        return api
        .delete(`/reviews${path}`, { data })
        .then((data) => data)
        .catch((error) => {
            throw error;
        })
    },
};

export default reviewsApi;
