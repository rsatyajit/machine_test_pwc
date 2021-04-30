import { CONSTANTS } from '../environment/constants';

class modelHandler {
    urlHandler = (options) => {
        let url;
        let params = {...CONSTANTS.params};
        for (let property in params) {
            if (params[property] || (!params[property] && options[property])) {
                params[property] = (!params[property] && options[property]) ? options[property] : params[property];
                url = (!url) ? `${property}=${params[property]}` : `${url}&${property}=${params[property]}`
            }
        }
        url = `${CONSTANTS.apiUrl}?${url}`;
        return url;
    }
}

export { modelHandler };