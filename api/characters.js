import { URLS } from '@constants';
import api from './api';

const { CHARACTERS } = URLS;

export const loadCharacters = (params) => {
  return api({
    method: 'GET',
    url: CHARACTERS,
    params
  });
};
