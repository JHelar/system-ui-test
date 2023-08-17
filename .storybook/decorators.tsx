import { Decorator } from '@storybook/react';
import { AppTheme } from '../lib/AppTheme';
import React from 'react';

export const withTheme: Decorator = (Story) => (
  <AppTheme>
    <Story />
  </AppTheme>
);
