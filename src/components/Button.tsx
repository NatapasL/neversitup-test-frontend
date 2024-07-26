import { ReactElement, ReactNode } from 'react';
import { ButtonType } from '../constants';

export interface ButtonProps {
  children: ReactNode | ReactNode[];
  type?: ButtonType;
  onClick?: () => void | Promise<void>;
}

export const Button = ({
  children,
  onClick,
  type = ButtonType.PRIMARY,
}: ButtonProps): ReactElement => {
  return <button onClick={onClick}>{children}</button>;
};
