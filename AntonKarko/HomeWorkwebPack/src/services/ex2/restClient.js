const RestClient = (() => class {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getConfig(method, data) {
        const config = {
            method: method.toUpperCase(),
            headers: {
                Accept: 'appliction/json',
                'Content-Type': 'appliction/json',
            },
        };
        if (data) {
            config.body = JSON.stringify(data);
        }

        return config;
    }

    reguest(endpoint, config) {
        return fetch(endpoint, config).then(response => {
            const { status } = response;

            if (status === 204) {
                return { status: response.status };
              }

            if (status >= 200 && status < 300) {
                return response
                .json()
                .then(data => data)
                .catch(err => { 
                    throw err; 
                });
            }

            return response.json().then(err => {
                const error = err;
                error.status = err. status;
                throw error;
            })
        })
    }

    get(endpoint = '', params = '') {
        return this.reguest(`${this.baseURL}${endpoint}?${params}`, this.getConfig('get', null))
    }

    post(endpoint = '', data = '') {
        return this.reguest(`${this.baseURL}${endpoint}`), this.getConfig('post', data)
    }

    delete(endpoint = '', data = '') {
        return this.reguest(`${this.baseURL}${endpoint}`), this.getConfig('delete', data)
    }
})();

export default RestClient;