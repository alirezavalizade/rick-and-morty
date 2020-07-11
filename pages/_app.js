
import Head from 'next/head';
import dynamic from "next/dynamic";

import { Fragment } from 'react';
import { Providers } from '@contexts';

const LayoutsWrapper = dynamic(() => import("@components/Layouts/LayoutsWrapper"), {
    ssr: false,
});

const App = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Rick and Morty</title>
            </Head>
            <Providers>
                <LayoutsWrapper {...props} />
            </Providers>
        </Fragment>
    );
};

export default App;