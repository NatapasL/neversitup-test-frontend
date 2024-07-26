import { ReactElement } from 'react';
import { ButtonType } from '../constants';

export interface ButtonProps {
  text: string;
  type: ButtonType;
  onClick: () => void | Promise<void>;
}

export const Button = (props: ButtonProps): ReactElement => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
