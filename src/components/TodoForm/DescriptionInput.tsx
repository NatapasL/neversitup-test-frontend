import { ReactElement } from "react";

export interface DescriptionInput {
  label: string;
}

export const DescriptionInput = (props: DescriptionInput): ReactElement => {
  return (
    <div>
      <div>{props.label}</div>
      <textarea />
    </div>
  );
};
