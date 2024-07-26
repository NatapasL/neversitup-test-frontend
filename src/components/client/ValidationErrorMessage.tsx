import { ReactElement } from 'react';

export interface ValidationErrorMessage {
  text: string;
}

export const ValidationErrorMessage = ({
  text,
}: ValidationErrorMessage): ReactElement => {
  return <div>{text}</div>;
};
