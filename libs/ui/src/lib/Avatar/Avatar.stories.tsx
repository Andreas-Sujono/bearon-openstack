import Box from '../Layout/Box';
import Row from '../Layout/Row';
import Avatar from './Avatar';
import AvatarGroupComponent from './AvatarGroup';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};
export default meta;

export const defaultAvatar = {
  render: () => {
    return <Avatar name="Andreas" />;
  },
};

export const Sizes = {
  render: () => {
    return (
      <Row gap="1rem">
        <Avatar name="Andreas" size="xs" />
        <Avatar name="Andreas" size="md" />
        <Avatar name="Andreas" size="lg" />
        <Avatar name="Andreas" size="xl" />
        <Avatar name="Andreas" size="h5" />
        <Avatar name="Andreas" size="h4" />
        <Avatar name="Andreas" size="h3" />
        <Avatar name="Andreas" size="h2" />
        <Avatar name="Andreas" size="h1" />
      </Row>
    );
  },
};

export const Colours = {
  render: () => {
    return (
      <Row gap="1rem">
        <Avatar name="Andreas" size="md" background="primary" />
        <Avatar name="Andreas" size="md" background="secondary" />
        <Avatar name="Andreas" size="md" background="success" />
        <Avatar name="Andreas" size="md" background="warning" />
        <Avatar name="Andreas" size="md" background="error" />
        <Avatar name="Andreas" size="md" background="info" />
        <Avatar name="Andreas" size="md" background="grey" />
      </Row>
    );
  },
};

export const WithNotification = {
  render: () => {
    return (
      <Row gap="1rem">
        <Avatar name="Andreas" size="md" background="primary" withNotif />
        <Avatar name="Andreas" size="md" background="secondary" withNotif />
        <Avatar name="Andreas" size="md" background="success" withNotif />
        <Avatar name="Andreas" size="md" background="warning" withNotif />
        <Avatar name="Andreas" size="md" background="error" withNotif />
        <Avatar name="Andreas" size="md" background="info" withNotif />
        <Avatar name="Andreas" size="md" background="grey" withNotif />
      </Row>
    );
  },
};

export const CustomAbbreviation = {
  render: () => {
    return (
      <Row gap="1rem">
        <Avatar name="Andreas Sujono" abbreviation="AS" />
      </Row>
    );
  },
};

export const AvatarGroup = {
  render: () => {
    return (
      <Box>
        <AvatarGroupComponent max={3}>
          <Avatar name="Andreas Sujono" abbreviation="AS" />
          <Avatar name="John Doe" />
          <Avatar name="Catherine" />
          <Avatar name="Mark Cuban" />
        </AvatarGroupComponent>

        <AvatarGroupComponent max={3} badgeColor="success" mt="1rem">
          <Avatar
            name="Andreas Sujono"
            abbreviation="AS"
            background="success"
          />
          <Avatar name="John Doe" background="success" />
          <Avatar name="Catherine" background="success" />
          <Avatar name="Mark Cuban" background="success" />
        </AvatarGroupComponent>
      </Box>
    );
  },
};
