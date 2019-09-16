import axios from 'axios';
import { getDataOptions } from './BackendServices';

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
