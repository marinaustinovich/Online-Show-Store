import axios from 'axios';
import { UrlsEnum } from 'enums';

const baseURL = UrlsEnum.SERVER_URL;

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(function (request) {
    request.headers.Accept = 'application/json';

    return request;
});

axios.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        return Promise.reject(error);
    },
);

export default axios;
