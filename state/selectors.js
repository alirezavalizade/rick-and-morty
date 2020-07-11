import omit from 'lodash.omit';
import isEqual from 'lodash.isequal';

import { selector } from "recoil";
import * as charactersApi from '@api/characters';
import * as locationsApi from '@api/locations';
import * as episodesApi from '@api/episodes';
import * as atoms from '@state/atoms';

import { infiniteLoader } from '@helpers/index';

let cachedCharacters;
let cachedFilterFormState;
export const characters = selector({
    key: "characters",
    get: async ({ get }) => {
        // https://github.com/facebookexperimental/Recoil/issues/12 :(
        // https://rickandmortyapi.com/documentation/#filter-characters
        const filters = get(charactersFilterFormState);
        const omittedFilters = omit(filters, 'locationId', 'episodeId');
        if (isEqual(omittedFilters, cachedFilterFormState)) {
            return cachedCharacters;
        }
        try {
            const results = await infiniteLoader(async (pageParams) => {
                return charactersApi.loadCharacters({
                    ...pageParams,
                    ...omittedFilters
                });
            });
            cachedCharacters = results;
            cachedFilterFormState = omittedFilters;
            return results;
        } catch (e) {
            console.log(e);
            return [];
        }
    },
});

export const locations = selector({
    key: "locations",
    get: async () => {
        return await infiniteLoader(locationsApi.loadLocations);
    },
});

export const episodes = selector({
    key: "episodes",
    get: async () => {
        return await infiniteLoader(episodesApi.loadEpisodes);
    },
});

export const modalVisibilityState = selector({
    key: 'modalVisibilityStateKey',
    get: ({ get }) => {
        return get(atoms.modalVisibilityState);
    }
});

export const charactersFilterFormState = selector({
    key: 'charactersFilterFormStateKey',
    get: ({ get }) => {
        return get(atoms.charactersFilterFormState);
    }
});



//  const { results } = await charactersApi.loadCharacters({
//     name,
//     status,
//     species,
//     type,
//     gender
// });
// if (results) {
//     return results
// }
// return [];