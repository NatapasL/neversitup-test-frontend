import { ReactElement } from "react";

export interface TitleInputProps {
  label: string;
}

export const TitleInput = (props: TitleInputProps): ReactElement => {
  return (
    <div>
      <div>{props.label}</div>
      <input />
    </div>
  );
};
