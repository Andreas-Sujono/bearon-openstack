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
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduction',
          ['Welcome', 'Principles', 'Research'],
          'Foundation',
          ['Layout', 'Heading', 'Typography', 'Theme'],
          'Components',
        ],
        locales: '',
      },
    },
  },
};

export default preview;
