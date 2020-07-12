import { URLS } from '@constants';
import api from './api';

const { EPISODES } = URLS;

export const loadEpisodes = (params) => {
  return api({
    method: 'GET',
    url: EPISODES,
    params
  });
};
