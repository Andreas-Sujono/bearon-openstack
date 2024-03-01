import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Native UI',
  brandUrl: 'https://native.org',
  brandImage: 'https://static.native.org/native-logo.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
