import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const EACH_ALBUM_DETEILS_URL = 'photos?albumId=';
const ALL_ALBUM_DETAILS_URL = 'albums';


export const getAllAlbumDetailsService = async () => {
    try {
        const response = await axios(getDataOptions(ALL_ALBUM_DETAILS_URL));
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};


export const updateAlbumDataService = async (id) => {
    const url = EACH_ALBUM_DETEILS_URL + id;
    try {
        const response = await axios(getDataOptions(url));
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getDataOptions = (url) => {
    const options = {
        method: 'get',
        baseURL: BASE_URL,
        url: url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    return options;
};

export const postDataOptions = (url, data) => {
    const options = {
        method: "post",
        baseURL: BASE_URL,
        url: url,
        data: data,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': "no-cache",
            Pragma: "no-cache"
        }
    }
    return options;
};
