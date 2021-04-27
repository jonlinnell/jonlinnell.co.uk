import { css, Global, useTheme } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={(theme) => css`
      html {
        box-sizing: border-box;
      }

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }

      body {
        background-color: ${theme.background};
        font-family: ${theme.fonts.content};
      }
    `}
  />
);
