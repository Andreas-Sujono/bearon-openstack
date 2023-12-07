import { Portal } from './Portal';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  overlayBg?: string;

  overlayClassName?: string;
  contentClassName?: string;
}

export function Modal({
  children,
  isOpen,
  onClose,
  shouldCloseOnOverlayClick,
  overlayBg,
  overlayClassName,
  contentClassName,
}: ModalProps) {
  return (
    <Portal>
      <div className="modal">{/* ssss*/}</div>
    </Portal>
  );
}
