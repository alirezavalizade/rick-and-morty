import { URLS } from '@constants';
import api from './api';

const { LOCATIONS } = URLS;

export const loadLocations = (params) => {
  return api({
    method: 'GET',
    url: LOCATIONS,
    params
  });
};
