'use client';

import { ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { SECONDARY } from '../styles/colors';
import { InputWrapper } from './InputWrapper';

const REQUIRED_ERROR_MESSAGE = 'Please complete this field.';
const MAX_LENGTH_ERROR_MESSAGE = 'Max :maxLength: characters.';

export interface TextareaProps {
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  maxLength: number;
  height?: string;
}

export const Textarea = ({
  label,
  name,
  required,
  value,
  maxLength,
  height,
}: TextareaProps): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo((): string => {
    return errors[name]?.message?.toString() ?? ``;
  }, [errors, name]);

  const maxLengthErrorMessage = useMemo(() => {
    return MAX_LENGTH_ERROR_MESSAGE.replace(/:maxLength:/, `${maxLength}`);
  }, [maxLength]);

  return (
    <InputWrapper label={label} errorMessage={errorMessage}>
      <StyledTextarea
        height={height}
        maxLength={maxLength}
        {...register(name, {
          required: {
            value: required ?? false,
            message: REQUIRED_ERROR_MESSAGE,
          },
          maxLength: {
            value: maxLength,
            message: maxLengthErrorMessage,
          },
          value: value ?? '',
        })}
      />
    </InputWrapper>
  );
};

interface StyledTextareaProps {
  height: string | undefined;
}

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: 100%;
  height: 72px;
  border-radius: 4px;
  border: 1px solid ${SECONDARY};
  padding: 4px 8px;
  resize: none;
  ${(props): string => (props.height ? `height: ${props.height};` : ``)}
`;
