import api from './api';
import { URLS } from '@constants';

const { EPISODES } = URLS;

export const loadEpisodes = (params) => {
    return api({
        method: 'GET',
        url: EPISODES,
        params
    });
};