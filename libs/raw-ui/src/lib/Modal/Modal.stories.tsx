import { useState } from 'react';
import { Button } from '../Button/Button';
import Box from '../Layout/Box';
import Text from '../Text';
import { ButtonGroup } from '../Button';
import { Modal, ModalHeader } from './ModalPortal';
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
        <Box>
          <ModalHeader
            title="Create Workspace"
            onClose={() => setIsOpen(false)}
          />
          <Text sx={{ padding: '1rem 0' }} display="block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida nisl sit amet hendrerit elementum. Phasellus et aliquet
            quam, nec ornare ex. Donec et luctus justo, id consectetur nisi. Nam
            non nunc ligula. Suspendisse potenti. Integer accumsan sem quis
            purus euismod, et tincidunt velit faucibus. Curabitur pharetra
            finibus nunc, sed finibus ex hendrerit eu. Cras elementum dui a
            imperdiet porttitor. Donec vulputate hendrerit quam, quis
            consectetur orci interdum ac. Cras porttitor arcu lacus.
          </Text>
          <ButtonGroup
            spacing="0.2rem"
            sx={{ marginTop: '1rem' }}
            align="right"
          >
            <Button variant="text" textColor="grey">
              cancel
            </Button>
            <Button>Create Workspace</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
};

export const defaultModal = {
  render: () => {
    return <ModalComponent />;
  },
};

const ModalScrollComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Box>
          <ModalHeader
            title="Create Workspace"
            onClose={() => setIsOpen(false)}
          />
          <Text
            sx={{ padding: '1rem 0', maxHeight: '300px', overflow: 'auto' }}
            display="block"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida nisl sit amet hendrerit elementum. Phasellus et aliquet
            quam, nec ornare ex. Donec et luctus justo, id consectetur nisi. Nam
            non nunc ligula. Suspendisse potenti. Integer accumsan sem quis
            purus euismod, et tincidunt velit faucibus. Curabitur pharetra
            finibus nunc, sed finibus ex hendrerit eu. Cras elementum dui a
            imperdiet porttitor. Donec vulputate hendrerit quam, quis
            consectetur orci interdum ac. Cras porttitor arcu lacus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla gravida nisl sit
            amet hendrerit elementum. Phasellus et aliquet quam, nec ornare ex.
            Donec et luctus justo, id consectetur nisi. Nam non nunc ligula.
            Suspendisse potenti. Integer accumsan sem quis purus euismod, et
            tincidunt velit faucibus. Curabitur pharetra finibus nunc, sed
            finibus ex hendrerit eu. Cras elementum dui a imperdiet porttitor.
            Donec vulputate hendrerit quam, quis consectetur orci interdum ac.
            Cras porttitor arcu lacus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla gravida nisl sit amet hendrerit elementum.
            Phasellus et aliquet quam, nec ornare ex. Donec et luctus justo, id
            consectetur nisi. Nam non nunc ligula. Suspendisse potenti. Integer
            accumsan sem quis purus euismod, et tincidunt velit faucibus.
            Curabitur pharetra finibus nunc, sed finibus ex hendrerit eu. Cras
            elementum dui a imperdiet porttitor. Donec vulputate hendrerit quam,
            quis consectetur orci interdum ac. Cras porttitor arcu lacus. Donec
            vulputate hendrerit quam, quis consectetur orci interdum ac. Cras
            porttitor arcu lacus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla gravida nisl sit amet hendrerit elementum.
            Phasellus et aliquet quam, nec ornare ex. Donec et luctus justo, id
            consectetur nisi. Nam non nunc ligula. Suspendisse potenti. Integer
            accumsan sem quis purus euismod, et tincidunt velit faucibus.
            Curabitur pharetra finibus nunc, sed finibus ex hendrerit eu. Cras
            elementum dui a imperdiet porttitor. Donec vulputate hendrerit quam,
            quis consectetur orci interdum ac. Cras porttitor arcu lacus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida
            nisl sit amet hendrerit elementum. Phasellus et aliquet quam, nec
            ornare ex. Donec et luctus justo, id consectetur nisi. Nam non nunc
            ligula. Suspendisse potenti. Integer accumsan sem quis purus
            euismod, et tincidunt velit faucibus. Curabitur pharetra finibus
            nunc, sed finibus ex hendrerit eu. Cras elementum dui a imperdiet
            porttitor. Donec vulputate hendrerit quam, quis consectetur orci
            interdum ac. Cras porttitor arcu lacus.
          </Text>
          <ButtonGroup
            spacing="0.2rem"
            sx={{ marginTop: '1rem' }}
            align="right"
          >
            <Button variant="text" textColor="grey">
              cancel
            </Button>
            <Button>Create Workspace</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
};

export const ModalWithScroll = {
  render: () => {
    return <ModalScrollComponent />;
  },
};
