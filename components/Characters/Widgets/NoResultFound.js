import { Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Bg = styled(Box)`
	background-image: url("/404.png");
	background-position: center;
    background-repeat: no-repeat;
    min-height: calc(100vh - 103px);
    background-size: calc(100vh - 300px);
	border-radius: 10px;
`;

const NoResultFound = () => {

    return (
        <Bg d="flex" alignItems="flex-end" justifyContent="center">
            <Heading as="h1" color="customGreen" marginBottom="2%">
                No result found
            </Heading>
        </Bg>
    );
};

export default NoResultFound;