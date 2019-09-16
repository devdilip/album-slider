
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

const setOptions = (method, baseURL, url) => {
    const options = {};
    options['method'] = method;
    options['baseURL'] = baseURL;
    options['url'] = url;
    return options;
}

export const getDataOptions = (url) => {
    const options = setOptions('get', BASE_URL, url);
    options['headers'] = setHeaders(false);
    return options;
};

export const postDataOptions = (url, data = null, urlEncoded = false) => {
    const options = setOptions('post', BASE_URL, url);
    if (data) {
        options['data'] = data;
    }
    options['headers'] = setHeaders(urlEncoded);
    return options;
};

export const putDataOptions = (url, data = null, urlEncoded = false) => {
    const options = setOptions('put', BASE_URL, url);
    if (data) {
        options['data'] = data;
    }
    options['headers'] = setHeaders(urlEncoded);
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