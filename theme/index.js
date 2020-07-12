import { css } from '@emotion/core';
import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    customGreen: '#73db35',
    haiti: '#0C0F29',
    fadedHaiti: '#0e1238'
  }
};

export const globalStyles = css`
    body {
        background-color: ${theme.colors.haiti};
        color: #FFF;
        background-image: url("${
          require('@public/vectors/background.js').default
        }");
    }

    .ReactVirtualized__Masonry, 
    .ReactVirtualized__Grid {
        outline: 0 !important;
    }
`;
