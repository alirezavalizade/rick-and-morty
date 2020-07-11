import api from './api';
import { URLS } from '@constants';

const { CHARACTERS } = URLS;

export const loadCharacters = (params) => {
    return api({
        method: 'GET',
        url: CHARACTERS,
        params
    });
};