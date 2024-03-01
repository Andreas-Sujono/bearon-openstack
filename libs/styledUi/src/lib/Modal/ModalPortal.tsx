import { useEffect } from 'react';
import { CloseIcon } from '../Icon';
import Transition from '../Animation/Transition';
import { ClickAwayListener } from '../ClickAwayListener';
import { Row } from '../Layout';
import { Button } from '../Button';
import { Heading } from '../Text';
import { classes, getDefaultClassName } from '../utils';
import { Portal } from './Portal';
import { StyledModal } from './Styles';
import { createGlobalStyle } from 'styled-components';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  overlayBg?: string;
  overlayClassName?: string;
  contentClassName?: string;
  contentContainerStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  wrapperId?: string;
  maxWidth?: string;
}

const ModalGlobalStyle = createGlobalStyle`
  body {
    max-height: 100vh;
    overflow: overlay;
  }
`;

export function Modal({
  children,
  isOpen,
  onClose,
  shouldCloseOnOverlayClick = true,
  overlayBg,
  overlayClassName,
  contentClassName,
  contentContainerStyle = {},
  overlayStyle = {},
  wrapperId,
  maxWidth,
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
    maxWidth: maxWidth || '600px',
    background: 'var(--backgroundLight)',
    padding: '1rem 1rem',
    borderRadius: '0.5rem',
    position: 'relative',
    top: '-5vh',
    border: '1px solid var(--outline)',
    ...contentContainerStyle,
  };

  return (
    <Portal wrapperId={wrapperId}>
      <Transition in={isOpen} timeout={{ enter: 200, exit: 300 }} unmount>
        {(visible, status) => (
          <StyledModal
            className={classes(
              getDefaultClassName('modal-overlay'),
              overlayClassName
            )}
            data-status={status}
            style={{ background: overlayBg || undefined, ...overlayStyle }}
          >
            <ClickAwayListener
              onClickAway={() =>
                onClose && shouldCloseOnOverlayClick && onClose()
              }
            >
              <div
                className={classes(
                  getDefaultClassName('modal-content'),
                  contentClassName
                )}
                data-status={status}
                style={contentContainerStyle}
              >
                {children}
              </div>
            </ClickAwayListener>
          </StyledModal>
        )}
      </Transition>
      {isOpen && <ModalGlobalStyle />}
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
      sx={{
        borderRadius: '50%',
      }}
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
