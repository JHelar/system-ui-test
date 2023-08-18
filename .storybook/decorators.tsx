import { Decorator } from '@storybook/react';
import { AppThemeProvider } from '../lib/AppTheme';
import React from 'react';

export const withTheme: Decorator = (Story) => (
  <AppThemeProvider>
    <Story />
  </AppThemeProvider>
);
