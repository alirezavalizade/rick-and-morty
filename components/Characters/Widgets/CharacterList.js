// Thanks for reading the code, If you saw any error related to setState in the console
// please checkout this issue on github
// https://github.com/facebookexperimental/Recoil/issues/12
import { filterCharactersByLocationId, filterCharactersByEpisodeId } from '@helpers';

import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import * as selectors from '@state/selectors';

import { SimpleGrid } from '@chakra-ui/core';
import Character from './Character';

const CharacterList = () => {
	const data = useRecoilValue(selectors.characters);
	const { locationId, episodeId } = useRecoilValue(selectors.charactersFilterFormState);

	return useMemo(() => {
		let characters = data;
		if (locationId) {
			characters = filterCharactersByLocationId(characters, locationId);
		}
		if (episodeId) {
			characters = filterCharactersByEpisodeId(characters, episodeId);
		}

		return (
			<SimpleGrid minChildWidth="250px" spacing="16px">
				{characters.map(item => {
					return (
						<Character key={item.id} data={item} />
					);
				})}
			</SimpleGrid>
		);
	}, [data, locationId, episodeId]);
};

export default CharacterList;