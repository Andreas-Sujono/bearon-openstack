import { useState } from 'react';
import Button from '../Button/Button';
import Box from '../Layout/Box';
import { Modal } from './ModalPortal';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};
export default meta;

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Box>Content</Box>
      </Modal>
    </Box>
  );
};

export const defaultModal = {
  render: () => {
    return <ModalComponent />;
  },
};

// export const ModalHeader = {
//   render: () => {
//     return (
//       <Modal isOpen>
//         <Box>Content</Box>
//       </Modal>
//     );
//   },
// };
