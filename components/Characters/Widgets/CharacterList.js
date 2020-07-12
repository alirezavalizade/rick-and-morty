// Thanks for reading the code, If you saw any error related to setState in the console
// please checkout this issue on github
// https://github.com/facebookexperimental/Recoil/issues/12
import { filterCharactersByLocationId, filterCharactersByEpisodeId } from '@helpers';

import { useRecoilValue } from 'recoil';
import * as selectors from '@state/selectors';
import { useMemo } from 'react';

import { SimpleGrid } from '@chakra-ui/core';
import { VirtualListGrid } from '@components/App';

import Character from './Character';
import NoResultFound from './NoResultFound';

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

		if (!characters.length) {
			return <NoResultFound />;
		}

		return (
			<VirtualListGrid
				data={characters}
				renderRow={({ data: rowData, measure, isScrolling }) => {
					return (
						<SimpleGrid 
							minChildWidth="250px" 
							spacing="16px"
							marginBottom="16px"
						>
							{rowData.map(item => (
								<Character 
									key={item.id}
									data={item} 
									isScrolling={isScrolling}
									onLoadImg={measure}
								/>
							))}
						</SimpleGrid>
					);
				}}
			/>
		);
	}, [data, locationId, episodeId]);
};

export default CharacterList;