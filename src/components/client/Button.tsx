'use client';

import { MouseEventHandler, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../constants';
import { PRIMARY, SECONDARY, WHITE } from '../../styles/colors';
import { Small1 } from '../../styles/text';

const ButtonTemplate = {
  [ButtonType.PRIMARY]: {
    BACKGROUND_COLOR: PRIMARY,
    TEXT_COLOR: WHITE,
  },
  [ButtonType.SECONDARY]: {
    BACKGROUND_COLOR: SECONDARY,
    TEXT_COLOR: WHITE,
  },
} as const;

export interface ButtonProps {
  children: ReactNode | ReactNode[];
  type?: ButtonType;
  onClick?: () => void | Promise<void>;
  width?: string;
}

export const Button = ({
  children,
  onClick,
  type = ButtonType.PRIMARY,
  width,
}: ButtonProps): ReactElement => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    onClick?.();
  };

  return (
    <StyleButton buttonType={type} onClick={handleClick} width={width}>
      <Small1>{children}</Small1>
    </StyleButton>
  );
};

interface StyleButtonProps {
  buttonType: ButtonType;
  width?: string;
}

const StyleButton = styled.button<StyleButtonProps>`
  min-width: 84px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  column-gap: 4px;
  border: none;
  background-color: ${(props): string => {
    return ButtonTemplate[props.buttonType].BACKGROUND_COLOR;
  }};
  color: ${(props): string => ButtonTemplate[props.buttonType].TEXT_COLOR};
  width: ${(props): string => props.width ?? `auto`};
  border-radius: 4px;
`;
