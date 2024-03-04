import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Bearon UI',
  brandUrl: 'https://bearon.studio/ui',
  brandImage: 'https://svgshare.com/i/zyf.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
