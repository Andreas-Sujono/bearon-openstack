import { bearCss } from '@bearon/utils';

export const stylePopperClass = bearCss`
  background: #575656;
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  display: none;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  &[data-show] {
    display: block;
    opacity: 1;
  }

  .ntv-arrow,
  .ntv-arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  .ntv-arrow {
    visibility: hidden;
  }

  .ntv-arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  &[data-popper-placement^='top'] > .ntv-arrow {
    bottom: -4px;
  }

  &[data-popper-placement^='bottom'] > .ntv-arrow {
    top: -4px;
  }

  &[data-popper-placement^='left'] > .ntv-arrow {
    right: -4px;
  }

  &[data-popper-placement^='right'] > .ntv-arrow {
    left: -4px;
  }
`;
