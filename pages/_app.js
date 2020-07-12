import 'react-virtualized/styles.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Providers } from '@contexts';

const LayoutsWrapper = dynamic(
  () => import('@components/Layouts/LayoutsWrapper'),
  {
    ssr: false
  }
);

const App = (props) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Providers>
        <LayoutsWrapper {...props} />
      </Providers>
    </>
  );
};

export default App;
