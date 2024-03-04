import React from 'react';
import Column from '../Layout/Column';
import { Progress } from './Progress';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
};
export default meta;

export const DefaultProgress = {
  render: () => {
    return <Progress progress={20} showLabel />;
  },
};

export const Colours = {
  render: () => {
    return (
      <Column gap="2rem">
        <Progress progress={20} showLabel />
        <Progress progress={30} showLabel progressColor="success" />
        <Progress progress={40} showLabel progressColor="grey" />
        <Progress progress={80} showLabel progressColor="error" />
        <Progress progress={100} showLabel progressColor="warning" />
      </Column>
    );
  },
};

const ProgressAnimation = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.ceil(Math.random() * 10);
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Progress progress={progress} showLabel />;
};
export const RandomProgressAnimation = {
  render: () => {
    return <ProgressAnimation />;
  },
};

export const WithoutLabel = {
  render: () => {
    return <Progress progress={20} showLabel={false} height="6px" />;
  },
};
