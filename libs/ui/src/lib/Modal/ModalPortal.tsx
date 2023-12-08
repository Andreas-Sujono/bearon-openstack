import { useEffect } from 'react';
import { classes } from '@bearon/utils';
import Transition from '../Animation/Transition';
import ClickAwayListener from '../ClickAwayListener';
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
    width: '30%',
    height: '30%',
    minWidth: '360px',
    background: 'var(--background)',
    padding: '1.5rem 2rem',
    borderRadius: '0.5rem',
    ...contentContainerStyle,
  };

  return (
    <Portal>
      <Transition in={isOpen} timeout={{ enter: 100, exit: 300 }} unmount>
        {(visible, status) => (
          <StyledModal
            className={classes('bear-modal-overlay', overlayClassName)}
            data-status={status}
          >
            <ClickAwayListener onClickAway={() => onClose && onClose()}>
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

// export const ModalHeader;
