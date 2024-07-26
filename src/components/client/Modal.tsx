'use client';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { MODAL_ROOT_ID, ZIndex } from '../../constants';
import { WHITE } from '../../styles/colors';

export interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void | Promise<void>;
  children: ReactNode | ReactNode[];
}

export const Modal = ({
  open,
  title,
  onClose,
  children,
}: ModalProps): ReactElement => {
  if (!open) return <div />;

  const modalRoot = document.getElementById(MODAL_ROOT_ID);
  if (!modalRoot) return <div />;

  return ReactDOM.createPortal(
    <StyledModal open={open}>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="close-modal-button" onClick={onClose}>
            <FontAwesomeIcon size="lg" icon={faX} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </StyledModal>,
    modalRoot
  );
};

interface StyledModalProps {
  open: boolean;
}

const StyledModal = styled.div<StyledModalProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${ZIndex.MAX};
  background: rgba(50, 50, 50, 0.75);
  display: ${(props): string => (props.open ? `flex` : `none`)};
  justify-content: center;
  align-items: center;

  .modal-container {
    width: 480px;
    max-width: 100vw;
    overflow: hidden;
    background-color: ${WHITE};
    height: 480px;
    padding: 16px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-modal-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .modal-body {
    width: 100%;
  }
`;
