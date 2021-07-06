import axios from 'axios';

import defaultConfig from './apiConfig';
import addInterceptors from './createInterceptors';

const createInstance = () => {
    const instance = axios.create(defaultConfig);

    return addInterceptors(instance);
};

export default createInstance();
