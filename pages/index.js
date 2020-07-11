import { Suspense, Fragment } from 'react';
import { Container } from '@components/ui';
import { 
  CharacterList, 
  CharacterListHeading, 
  CharactersFilterModal,
  CharactersLoading,
} from '@components/Characters';

const Home = () => {
  return (
    <Fragment>
      <CharacterListHeading />
      <CharactersFilterModal />
      <Suspense fallback={<CharactersLoading />}>
        <CharacterList />
      </Suspense>
    </Fragment>
  );
};

Home.Layout = Container;

export default Home;