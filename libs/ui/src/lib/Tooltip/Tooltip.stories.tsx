import { Button } from '../Button';
import { Box, Row } from '../Layout';
import { Tooltip } from './Tooltip';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooptip',
  component: Tooltip,
  tags: ['autodocs'],
};
export default meta;

export const defaultTooltip = {
  render: () => {
    return <Tooltip text="Tooltip content">Hover me </Tooltip>;
  },
};

export const LongText = {
  render: () => {
    return (
      <Tooltip text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book">
        Hover me
      </Tooltip>
    );
  },
};

export const TooltipPlacement = {
  render: () => {
    return (
      <Box p="5rem 10rem">
        <Row sx={{ width: '300px' }} justifyContent="center">
          <Tooltip text="Tooltip content" position="top" show>
            Top
          </Tooltip>
        </Row>
        <br />
        <br />
        <Row sx={{ width: '300px' }} justifyContent="space-between">
          <Tooltip text="Tooltip content" position="left" show>
            Left
          </Tooltip>
          <Tooltip text="Tooltip content" position="right" show>
            Right
          </Tooltip>
        </Row>
        <br />
        <br />

        <Row sx={{ width: '300px' }} justifyContent="center">
          <Tooltip text="Tooltip content" position="bottom" show>
            Bottom
          </Tooltip>
        </Row>
      </Box>
    );
  },
};

export const HtmlContent = {
  render: () => {
    return (
      <Tooltip
        bg="#efeeee"
        textColor="black"
        element={
          <div
            style={{
              background: '#efeeee',
              padding: '0.5rem',
            }}
          >
            this is a custom element
            <Button textVariant="xs" mt="0.5rem">
              Click Me
            </Button>
          </div>
        }
      >
        Hover me{' '}
      </Tooltip>
    );
  },
};
