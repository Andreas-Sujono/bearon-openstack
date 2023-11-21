import { bearCss } from '@bearon/utils';
import type { Meta } from '@storybook/react';

const boxClass = bearCss`
  width: 300px;
  height:50px;
`;
const labelClass = bearCss`
  display: inline-block;
  margin-bottom: 12px;
`;

const meta: Meta = {
  title: 'Foundation/Theme',
  render: () => <>1</>,
};
export default meta;

export const ThemeShowcase = {
  render: () => {
    return (
      <div>
        <span className={labelClass}>Primary: var(--colorPrimary)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--colorPrimary)' }}
        ></div>

        <span className={labelClass}>Accent: var(--colorAccent)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--colorAccent)' }}
        ></div>

        <span className={labelClass}>TextTitle: var(--colorPrimary)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--colorPrimary)' }}
        ></div>
      </div>
    );
  },
};
