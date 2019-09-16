
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const setHeaders = (urlEncodedForm) => {
    const additionalHeaders = {};
    if (urlEncodedForm) {
        additionalHeaders['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
    } else {
        additionalHeaders['Content-Type'] = 'application/json';
        additionalHeaders['Accept'] = 'application/json';
    }
    additionalHeaders['Cache-Control'] = 'no-cache';
    additionalHeaders['Pragma'] = 'no-cache';
    return additionalHeaders;
};


export const getDataOptions = (url) => {
    const options = {
        method: 'get',
        baseURL: BASE_URL,
        url: url,
        headers: setHeaders(false)
    }
    return options;
};

export const postDataOptions = (url, data) => {
    const options = {
        method: "post",
        baseURL: BASE_URL,
        url: url,
        data: data,
        headers: setHeaders(false)
    }
    return options;
};

export const getDataOptionsWithDefaultHeader = (url) => {
    const options = {
        method: 'get',
        baseURL: BASE_URL,
        url: url,
        headers: {
            Accept: 'application/json',
            Pragma: "no-cache",
            'Content-Type': 'application/json',
            'Cache-Control': "no-cache"
        }
    }
    return options;
};