import axios from 'axios';
import {API_KEY_UAT} from './config';
// axios.defaults.headers.common['Authorization'] = API_KEY_UAT;
const get = (url, params = {}) => {
  const aParams = Object.entries({...params, api_key: API_KEY_UAT});
  const uPram = aParams.map(param => `${param[0]}=${param[1]}`);
  return axios
    .get(`${url}?${uPram.join('&')}`)
    .then(response => response.data)
    .catch(error => ({error}));
};

const getWithoutKey = (url, params = {}) => {
  const aParams = Object.entries({...params});
  const uPram = aParams.map(param => `${param[0]}=${param[1]}`);
  return axios
    .get(`${url}?${uPram.join('&')}`)
    .then(response => response.data)
    .catch(error => ({error}));
};

const post = (
  url,
  params = {},
  // headers = { 'Content-Type': 'application/json' },
) => {
  return axios
    .post(url, {...params, api_key: API_KEY_UAT})
    .then(response => response.data)
    .catch(error => ({error}));
};

const postWithOutKey = (
  url,
  params = {},
  // headers = { 'Content-Type': 'application/json' },
) => {
  return axios
    .post(url, {...params})
    .then(response => response.data)
    .catch(error => ({error}));
};

export {get, post, getWithoutKey, postWithOutKey};
