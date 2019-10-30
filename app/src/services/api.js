import axios from 'axios';


// declare a request interceptor
axios.interceptors.request.use(request => {
    debugger;
    // perform a task before the request is sent
    console.log('Request was sent to ' + request.url);

    return request;
}, error => {
    // handle the error
    return Promise.reject(error);
});



// declare a response interceptor
axios.interceptors.response.use((response) => {
    // do something with the response data
    console.log('Response was received: ' + JSON.stringify(response.data));

    return response;
}, error => {
    // handle the response error
    return Promise.reject(error);
});

export const apiURL = 'http://10.0.0.6:3001/kame-tcha/api/v1';


// http://10.0.0.6:3000/kame-tcha/api/v1/
const api = axios.create({
    baseURL: apiURL,
});

export default api;
