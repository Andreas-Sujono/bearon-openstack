import { Link } from './Link';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Link> = {
  title: 'Foundation/Link',
  component: Link,
  tags: ['autodocs'],
};
export default meta;

export const Sizes = {
  render: () => {
    return (
      <div>
        <Link href="https://www.google.com">External Link</Link>
        <br />
        <br />

        <Link href="https://www.google.com" secondary>
          Secondary Link
        </Link>
        <br />
      </div>
    );
  },
};

export const NoUnderline = {
  render: () => {
    return (
      <div>
        <Link href="https://www.google.com" disableUnderline>
          External Link
        </Link>
        <br />
        <br />

        <Link href="https://www.google.com" secondary disableUnderline>
          Secondary Link
        </Link>
        <br />
      </div>
    );
  },
};
