import DefaultLayout from './DefaultLayout';

const LayoutsWrapper = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default LayoutsWrapper;
