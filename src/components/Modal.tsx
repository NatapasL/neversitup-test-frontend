'use client';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler, ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { MODAL_ROOT_ID } from '../constants';
import { WHITE } from '../styles/colors';
import { Title3 } from '../styles/text';
import { ZIndex } from '../styles/z-index';

export interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void | Promise<void>;
  children: ReactNode | ReactNode[];
  showCloseButton?: boolean;
}

export const Modal = ({
  open,
  title,
  onClose,
  children,
  showCloseButton = true,
}: ModalProps): ReactElement => {
  if (!open) return <div />;

  const modalRoot = document.getElementById(MODAL_ROOT_ID);
  if (!modalRoot) return <div />;

  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <StyledModal onClick={onClose}>
      <div className="modal-container" onClick={stopPropagation}>
        <Title3 className="modal-header">
          <div className="modal-title">{title}</div>
          {showCloseButton ? (
            <button className="close-modal-button" onClick={onClose}>
              <FontAwesomeIcon size="lg" icon={faX} />
            </button>
          ) : (
            <></>
          )}
        </Title3>
        <div className="modal-body">{children}</div>
      </div>
    </StyledModal>,
    modalRoot
  );
};

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${ZIndex.MAX};
  background: rgba(50, 50, 50, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-container {
    width: 480px;
    max-width: calc(100vw - 16px);
    overflow: hidden;
    background-color: ${WHITE};
    padding: 16px 16px;
    border-radius: 4px;
    box-shadow: 0 8px 24px rgba(37, 42, 51, 0.08);
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
