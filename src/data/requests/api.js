import Config from '../../config';

const apiHost = Config.API_URL;

const request = async (url, options = {}) => {
        let response;
        try {
            response = await fetch(`${apiHost}${url}`, options);

            switch (response.status) {
                case 404:
                    throw Error('not_found');
                case 405:
                    throw Error('not_allowed');
                default:
            }

        } catch (error) {
            return Promise.reject(error);
        }

        return await response.json();
    },
    get =  url => request(url),
    post = (url, options) => request(url, {method: 'POST', ...options});

export { get, post }
