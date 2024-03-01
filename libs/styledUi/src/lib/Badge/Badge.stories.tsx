import { Row } from '../Layout';
import { Text } from '../Text';
import Badge from './Badge';
import { UserIcon, LightbulbIcon } from '../Icon';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};
export default meta;

export const defaultBadge = {
  render: () => {
    return (
      <Badge>
        <Text>badge name</Text>
      </Badge>
    );
  },
};

export const Sizes = {
  render: () => {
    return (
      <Row gap="1rem">
        <Badge size="xs">
          <Text>badge xs</Text>
        </Badge>
        <Badge size="sm">
          <Text>badge sm</Text>
        </Badge>
        <Badge size="md">
          <Text>badge md</Text>
        </Badge>
        <Badge size="lg">
          <Text>badge lg</Text>
        </Badge>
        <Badge size="xl">
          <Text>badge xl</Text>
        </Badge>
      </Row>
    );
  },
};

export const Colours = {
  render: () => {
    return (
      <Row gap="1rem">
        <Badge background="primary">
          <Text>badge primary</Text>
        </Badge>
        <Badge background="secondary">
          <Text>badge secondary</Text>
        </Badge>
        <Badge background="success">
          <Text>badge success</Text>
        </Badge>
        <Badge background="warning">
          <Text>badge warning</Text>
        </Badge>
      </Row>
    );
  },
};

export const SubtleColors = {
  render: () => {
    return (
      <Row gap="1rem">
        <Badge background="primary" backgroundOpacity={0.1}>
          <Text colour="primary">badge primary</Text>
        </Badge>
        <Badge background="secondary" backgroundOpacity={0.1}>
          <Text colour="secondary">badge secondary</Text>
        </Badge>
        <Badge background="success" backgroundOpacity={0.1}>
          <Text colour="success">badge success</Text>
        </Badge>
        <Badge background="warning" backgroundOpacity={0.1}>
          <Text colour="warning">badge warning</Text>
        </Badge>
      </Row>
    );
  },
};

export const WithIcon = {
  render: () => {
    return (
      <Row gap="1rem">
        <Badge background="primary">
          <UserIcon size="16px" />
          <Text>badge icon</Text>
          <LightbulbIcon size="16px" />
        </Badge>
      </Row>
    );
  },
};
