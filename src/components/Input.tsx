import { ReactElement, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { InputContainer } from "./InputContainer";

const REQUIRED_ERROR_MESSAGE = `Please complete this field`;
const MAX_LENGTH_ERROR_MESSAGE = `Max :maxLength: characters`;

export interface TitleInputProps {
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  maxLength: number;
}

export const Input = ({
  name,
  label,
  required,
  value,
  maxLength,
}: TitleInputProps): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = useMemo((): string => {
    return errors[name]?.message?.toString() ?? ``;
  }, [errors[name]?.message]);

  const maxLengthErrorMessage = useMemo(() => {
    return MAX_LENGTH_ERROR_MESSAGE.replace(/:maxLength:/, `${maxLength}`);
  }, [maxLength]);

  return (
    <InputContainer label={label} errorMessage={errorMessage}>
      <StyledInput
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

const StyledInput = styled.input``;
