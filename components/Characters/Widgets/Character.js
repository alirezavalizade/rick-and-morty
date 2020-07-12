import { getVariantColorByStatus } from '@helpers';

import { Box, Image, Text, Badge, AspectRatioBox } from '@chakra-ui/core';

const Character = ({ data }) => {
	return (
		<Box 
			borderWidth="5px" 
			borderColor="customGreen" 
			rounded="lg" 
			overflow="hidden" 
			backgroundColor="haiti"
		>
			<AspectRatioBox ratio={1}>
				<Image 
					src={data.image}
					w="100%"
					loading="lazy"
				/>
			</AspectRatioBox>
			<Box padding={3}>
				<Box d="flex" alignItems="center">
					<Box isTruncated>
						<Text 
							letterSpacing="2px" 
							fontSize="sm" 
							fontWeight="700"
							marginRight="10px" 
							isTruncated
						>
							{data.name}
						</Text>
					</Box>
					<Box marginLeft="auto">
						<Badge 
							fontSize="10px" 
							variant="outline" 
							variantColor={getVariantColorByStatus(data.status)}
						>
							{data.status} - {data.species}
						</Badge>
					</Box>
				</Box>
				<Box marginTop="15px">
					<Box d="flex" alignItems="center">
						<Text color="customGreen" fontSize="xs" fontWeight="500">
							number of episodes:
						</Text>
						<Badge 
							marginLeft="auto"
							fontSize="10px"
							variant="outline"
							color="green"
						>
							{data.episode ? data.episode.length : 0}
						</Badge>
					</Box>
				</Box>
				<Box marginTop="5px">
					<Box d="flex" alignItems="center">
						<Text color="customGreen" fontSize="xs" fontWeight="500">
							Gender: 
						</Text>
						<Text letterSpacing="1px" marginLeft="auto" fontSize="xs" fontWeight="700">
							{data.gender}
						</Text>
					</Box>
				</Box>
				<Box marginTop="5px">
					<Text color="customGreen" fontSize="xs" fontWeight="500">
						Last known location:
					</Text>
					<Text letterSpacing="1px" fontSize="xs" fontWeight="700" isTruncated>
						{data.location.name}
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Character;