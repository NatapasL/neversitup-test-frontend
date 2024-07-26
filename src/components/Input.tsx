'use client';

import { ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { InputType } from '../constants';
import { SECONDARY } from '../styles/colors';
import { InputContainer } from './InputContainer';

const REQUIRED_ERROR_MESSAGE = 'Please complete this field';
const MAX_LENGTH_ERROR_MESSAGE = 'Max :maxLength: characters';

export interface InputProps {
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  maxLength: number;
  inputType?: InputType;
}

export const Input = ({
  name,
  label,
  required,
  value,
  maxLength,
  inputType = InputType.TEXT,
}: InputProps): ReactElement => {
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
    <InputContainer label={label} errorMessage={errorMessage}>
      <StyledInput
        type={inputType}
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
          value: value ?? ``,
        })}
      />
    </InputContainer>
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${SECONDARY};
  padding: 4px 8px;
`;
