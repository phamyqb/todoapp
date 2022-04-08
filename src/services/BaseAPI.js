import axios from "axios";
import { BASE_API_URL } from '../common/Config';

const instance = axios.create({
    timeout: 100000,
    maxContentLength: 10000
});

const defaultOptions = {
    headers: {
        accept: 'application/json',
        contentType: 'application/json'
    }
};

const get = (url, options = {}) => instance.get(BASE_API_URL + url, { ...defaultOptions, options })
const post = (url, body = {}, options = {}) => instance.post(BASE_API_URL + url, body, { ...defaultOptions, options });
const put = (url, body = {}, options = {}) => instance.put(BASE_API_URL + url, body, { ...defaultOptions, options });
const _delete = (url, options = {}) => instance.delete(BASE_API_URL + url, { ...defaultOptions, options });
const interceptorHandleRequest = (config) => config;
const interceptorHandleReponse = (response) => response;
const handleError = (error) => Promise.reject(error);

instance.interceptors.request.use(interceptorHandleRequest, handleError);
instance.interceptors.response.use(interceptorHandleReponse, handleError);

export {
    get,
    post,
    put,
    _delete as delete
}