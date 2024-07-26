'use client';

import { ReactElement, ReactNode } from 'react';
import { Small1 } from '../styles/text';
import { ValidationErrorMessage } from './ValidationErrorMessage';

export interface InputContainer {
  label: string;
  errorMessage: string;
  children: ReactNode | ReactNode[];
}

export const InputContainer = ({
  label,
  errorMessage,
  children,
}: InputContainer): ReactElement => {
  return (
    <div>
      <Small1>{label}</Small1>
      {children}
      {errorMessage ? <ValidationErrorMessage text={errorMessage} /> : <></>}
    </div>
  );
};
