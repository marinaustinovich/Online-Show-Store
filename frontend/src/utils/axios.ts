import axios from 'axios';
import { snakeKeys } from 'js-convert-case';
import { UrlsEnum } from 'enums';

const baseURL = UrlsEnum.SERVER_URL;

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(function (request) {
    request.headers.Accept = 'application/json';

    if (request.params) {
        request.params = snakeKeys(request.params, { recursive: true, recursiveInArray: true });
    }

    if (request.data) {
        request.data = snakeKeys(request.data, { recursive: true, recursiveInArray: true, keepTypesOnRecursion: [File] });
    }

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
