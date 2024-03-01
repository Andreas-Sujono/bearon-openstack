import styled from 'styled-components';
import { ThemeColor } from '../ThemeProvider';
import { getDefaultClassName } from '../utils';

export const StyledModal = styled.div<{
  $overlayColor?: ThemeColor;
}>`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
  transition: all 200ms ease-in-out;
  opacity: 0;
  box-shadow: 0px 0px 20px 0px rgba(104, 104, 104, 0.3);
  backdrop-filter: blur(3px) !important;

  &[data-status='entering'],
  &[data-status='entered'] {
    opacity: 1;
  }
  &[data-status='exiting'],
  &[data-status='exited'] {
    transition: all 300ms ease-in-out;
    opacity: 0;
  }

  .${getDefaultClassName('modal-content')} {
    transition: all 150ms ease-in-out;
    transform: scale(0.8);
    &[data-status='entering'],
    &[data-status='entered'] {
      opacity: 1;
      transform: scale(1);
    }
    &[data-status='exiting'],
    &[data-status='exited'] {
      transition: all 300ms ease-in-out;
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;
