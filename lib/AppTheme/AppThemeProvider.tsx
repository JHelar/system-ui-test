'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { appTheme, primitives } from './appTheme';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${primitives.typography.textFont};
    font-size: 100%;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    
    * {
      box-sizing: border-box;
    }
  }
`;

export function AppThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
