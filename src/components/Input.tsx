import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

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

  console.log(errors);

  return (
    <div>
      <div>{label}</div>
      <input
        {...register(name, {
          required: {
            value: required ?? false,
            message: `Please complete this field`,
          },
          maxLength: {
            value: maxLength,
            message: `This field can't longer than ${maxLength}`,
          },
          value: value ?? ``,
        })}
      />
    </div>
  );
};
