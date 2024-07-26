import { ReactElement } from 'react';
import styled from 'styled-components';
import { ButtonType } from '../constants';
import { Body2 } from '../styles/text';
import { Button } from './Button';
import { Modal } from './Modal';

export interface ConfirmDialogProps {
  open: boolean;
  description: string;
  onSubmit: () => void | Promise<void>;
  onCancel: () => void | Promise<void>;
}

export const ConfirmDialog = ({
  open,
  onCancel,
  description,
  onSubmit,
}: ConfirmDialogProps): ReactElement => {
  return (
    <Modal
      title={`Confirm delete`}
      open={open}
      onClose={onCancel}
      showCloseButton={false}
    >
      <StyledConfirmDialog>
        <Body2 className="description-container">{description}</Body2>

        <div className="button-container">
          <Button type={ButtonType.SECONDARY} onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>Confirm</Button>
        </div>
      </StyledConfirmDialog>
    </Modal>
  );
};

const StyledConfirmDialog = styled.div`
  .description-container {
    display: block;
    margin: 8px 0 24px;
    word-break: break-all;
    white-space: break-spaces;
    max-height: 60px;
    overflow: hidden;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    column-gap: 8px;
  }
`;
