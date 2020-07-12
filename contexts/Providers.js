import { Global } from '@emotion/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { theme, globalStyles } from '@theme';
import { RecoilRoot } from 'recoil';

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  );
};

export default Providers;
