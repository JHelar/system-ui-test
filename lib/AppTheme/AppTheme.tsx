'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { appTheme, primitives } from './appTheme';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${primitives.typography.fontFamily};
    font-size: 100%;
  }
`;

export function AppTheme({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
