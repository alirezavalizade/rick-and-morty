import api from './api';
import { URLS } from '@constants';

const { LOCATIONS } = URLS;

export const loadLocations = (params) => {
    return api({
        method: 'GET',
        url: LOCATIONS,
        params
    });
};