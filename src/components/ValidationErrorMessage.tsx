import { ReactElement } from 'react';
import styled from 'styled-components';
import { ERROR } from '../styles/colors';
import { Small2 } from '../styles/text';

export interface ValidationErrorMessage {
  text: string;
}

export const ValidationErrorMessage = ({
  text,
}: ValidationErrorMessage): ReactElement => {
  return (
    <StyledErrorMessage>
      <Small2>{text}</Small2>
    </StyledErrorMessage>
  );
};

const StyledErrorMessage = styled.div`
  color: ${ERROR};
`;
