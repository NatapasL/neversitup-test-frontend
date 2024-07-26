'use client';

import { ReactElement, ReactNode } from 'react';
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
      <div>{label}</div>
      {children}
      {errorMessage ? <ValidationErrorMessage text={errorMessage} /> : <></>}
    </div>
  );
};
