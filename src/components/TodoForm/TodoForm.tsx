import { ReactElement, useCallback } from "react";
import styled from "styled-components";
import { ButtonType } from "../../constants";
import { Todo } from "../../types";
import { Button } from "../Button";
import { DescriptionInput } from "./DescriptionInput";
import { TitleInput } from "./TitleInput";

export interface TodoFormProps {
  todo?: Todo;
  submitButtonText: string;
  onSubmit: () => void | Promise<void>;
  onCancel: () => void | Promise<void>;
}

export const TodoForm = ({
  todo,
  submitButtonText,
}: TodoFormProps): ReactElement => {
  const handleClickSubmit = useCallback(() => {}, []);

  return (
    <StyledTodoForm>
      <TitleInput label="Title" />

      <DescriptionInput label="Description" />

      <div>
        <Button
          text="Cancel"
          onClick={handleClickSubmit}
          type={ButtonType.SECONDARY}
        ></Button>

        <Button
          text={submitButtonText}
          onClick={handleClickSubmit}
          type={ButtonType.PRIMARY}
        ></Button>
      </div>
    </StyledTodoForm>
  );
};

const StyledTodoForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
