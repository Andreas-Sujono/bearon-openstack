import { bearCss } from '@bearon/utils';
import type { Meta } from '@storybook/react';

const boxClass = bearCss`
  width: 300px;
  height:50px;
`;
const labelClass = bearCss`
  display: inline-block;
  margin-bottom: 12px;
  margin-top: 12px;
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
        <span className={labelClass}>background: var(--background)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--background)' }}
        ></div>

        <span className={labelClass}>
          backgroundLight: var(--backgroundLight)
        </span>
        <div
          className={boxClass}
          style={{ background: 'var(--backgroundLight)' }}
        ></div>

        <span className={labelClass}>Primary: var(--primary)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--primary)' }}
        ></div>

        <span className={labelClass}>Secondary: var(--secondary)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--secondary)' }}
        ></div>

        <span className={labelClass}>Accent: var(--accent)</span>
        <div className={boxClass} style={{ background: 'var(--accent)' }}></div>

        <span className={labelClass}>textTitle: var(--textTitle)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--textTitle)' }}
        ></div>

        <span className={labelClass}>textBody: var(--textBody)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--textBody)' }}
        ></div>

        <span className={labelClass}>textLight: var(--textLight)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--textLight)' }}
        ></div>

        <span className={labelClass}>error: var(--error)</span>
        <div className={boxClass} style={{ background: 'var(--error)' }}></div>

        <span className={labelClass}>warning: var(--warning)</span>
        <div
          className={boxClass}
          style={{ background: 'var(--warning)' }}
        ></div>

        <span className={labelClass}>info: var(--info)</span>
        <div className={boxClass} style={{ background: 'var(--info)' }}></div>
      </div>
    );
  },
};
