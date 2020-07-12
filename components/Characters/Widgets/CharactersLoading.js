import { Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Bg = styled(Box)`
  min-height: 500px;
  background-image: url('https://media3.giphy.com/media/i2dE5VvBNxBw4/giphy.gif?cid=ecf05e47fbce464bd47ddf49aeec9aa7f0cad17f3557ec61&rid=giphy.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-color: #96c651;
  background-size: cover;
  border-radius: 10px;
`;

const CharactersLoading = () => {
  return (
    <Bg d="flex" alignItems="center" justifyContent="center">
      <Heading as="h1" color="customGreen">
        Loading...
      </Heading>
    </Bg>
  );
};

export default CharactersLoading;
