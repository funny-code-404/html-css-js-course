import api from '../axiosInstance';
import { mapReviews } from '../../ex2/helpers';

const reviewsApi = {
    getReviews: (path = '', config = {}) => {
        return api
        .get(`/reviews${path}`, config)
        .then(({data}) => mapReviews(data))
        .catch((error) => {
            throw error;
        })
    },
    createReviews: (path = '', config = {}) => {
        return api
        .post(`/reviews${path}`, config)
        .then((data) => data)
        .catch((error) => {
            throw error;
        })
    },
    deleteReviews: (path = '', config = {}) => {
        return api
        .delete(`/reviews${path}`, config)
        .then((data) => data)
        .catch((error) => {
            throw error;
        })
    },
};

export default reviewsApi;
