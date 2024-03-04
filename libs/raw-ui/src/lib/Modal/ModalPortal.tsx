import { useEffect } from 'react';
import { classes } from '@bearon/utils';
import { CloseIcon } from '@bearon/icon';
import Transition from '../Animation/Transition';
import ClickAwayListener from '../ClickAwayListener';
import Row from '../Layout/Row';
import { Button } from '../Button';
import { Heading } from '../Text';
import { Portal } from './Portal';
import { StyledModal } from './Styles';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  overlayBg?: string;
  overlayClassName?: string;
  contentClassName?: string;
  contentContainerStyle?: React.CSSProperties;
}

export function Modal({
  children,
  isOpen,
  onClose,
  shouldCloseOnOverlayClick = true,
  overlayBg,
  overlayClassName,
  contentClassName,
  contentContainerStyle = {},
}: ModalProps) {
  //handle close on click of esc key
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose && onClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  contentContainerStyle = {
    width: '80%',
    minWidth: '360px',
    maxWidth: '600px',
    background: 'var(--background)',
    padding: '1.5rem 2rem',
    borderRadius: '0.5rem',
    position: 'relative',
    top: '-10%',
    ...contentContainerStyle,
  };

  return (
    <Portal>
      <Transition in={isOpen} timeout={{ enter: 200, exit: 300 }} unmount>
        {(visible, status) => (
          <StyledModal
            className={classes('bear-modal-overlay', overlayClassName)}
            data-status={status}
            style={{ background: overlayBg || undefined }}
          >
            <ClickAwayListener
              onClickAway={() =>
                onClose && shouldCloseOnOverlayClick && onClose()
              }
            >
              <div
                className={classes('bear-modal-content', contentClassName)}
                data-status={status}
                style={contentContainerStyle}
              >
                {children}
              </div>
            </ClickAwayListener>
          </StyledModal>
        )}
      </Transition>
    </Portal>
  );
}

export const ModalClose = ({ onClose }: { onClose: () => void }) => {
  return (
    <Button
      icon={<CloseIcon />}
      onClick={onClose}
      variant="text"
      textColor="grey"
    ></Button>
  );
};

//default header
export const ModalHeader = ({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => {
  return (
    <Row justifyContent="space-between">
      <Heading level={5} weight="bold">
        {title}
      </Heading>
      <ModalClose onClose={onClose} />
    </Row>
  );
};
