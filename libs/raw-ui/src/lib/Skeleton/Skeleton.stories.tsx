import Row from '../Layout/Row';
import Skeleton from './Skeleton';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};
export default meta;

export const SkeletonSample = {
  render: () => {
    return <Skeleton count={5} />;
  },
};

export const SkeletonCardSample = {
  render: () => {
    return (
      <Row>
        <div className="left-col">
          <Skeleton
            circle
            height={80}
            width={80}
            containerClassName="avatar-skeleton"
          />
          <Skeleton width={70} mt={12} ml={6} />
        </div>
        <div className="right-col" style={{ flex: '1 1 0', maxWidth: '400px' }}>
          <Skeleton width="50%" mb={12} ml={12} mt={12} />
          <Skeleton count={3} ml={12} />
        </div>
      </Row>
    );
  },
};
