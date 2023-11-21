import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/lib/ThemeProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
