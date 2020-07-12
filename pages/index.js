import { Suspense } from 'react';
import { Container } from '@components/ui';
import {
  CharacterList,
  CharacterListHeading,
  CharactersFilterModal,
  CharactersLoading
} from '@components/Characters';

const Home = () => {
  return (
    <>
      <CharacterListHeading />
      <CharactersFilterModal />
      <Suspense fallback={<CharactersLoading />}>
        <CharacterList />
      </Suspense>
    </>
  );
};

Home.Layout = Container;

export default Home;
