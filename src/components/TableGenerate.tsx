'use client';

import {
  type FormEvent,
  type ReactElement,
  useCallback,
  useState,
} from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { parseTable } from '../helpers/table';
import { Body2 } from '../styles/text';
import type { ColumnDefinition, FormatData, SourceTable } from '../types';
import { Button } from './Button';
import { Table } from './Table';
import { Textarea } from './Textarea';

const FormConfig = {
  NAME: `input`,
  LABEL: `Paste JSON here`,
  MAX_LENGTH: 4000,
} as const;

const JSON_FORMAT_ERROR_MESSAGE = `Cant parse to table.`;

const sampleTableData = process.env.NEXT_PUBLIC_EXAMPLE_TABLE ?? ``;

export const TableGenerate = (): ReactElement => {
  const form = useForm();
  const [columns, setColumns] = useState<ColumnDefinition[]>([]);
  const [formatData, setFormatData] = useState<FormatData[]>([]);

  const handleMakeTable = useCallback((): void => {
    form.clearErrors();
    const input = form.getValues()[FormConfig.NAME];

    let sourceTable: SourceTable;
    let formatDataList: FormatData[];
    try {
      sourceTable = JSON.parse(input);
      formatDataList = parseTable(sourceTable);
    } catch (e) {
      form.setError(FormConfig.NAME, { message: JSON_FORMAT_ERROR_MESSAGE });
      return;
    }

    setColumns(sourceTable.columns);
    setFormatData(formatDataList);
  }, [form]);

  const preventDefault = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <StyledTableGenerate>
      <FormProvider {...form}>
        <form onSubmit={preventDefault} noValidate>
          <Textarea
            name={FormConfig.NAME}
            label={FormConfig.LABEL}
            maxLength={FormConfig.MAX_LENGTH}
            height="40vh"
            value={sampleTableData}
          ></Textarea>
        </form>
      </FormProvider>

      <Button onClick={handleMakeTable}>Make table</Button>

      <div>
        <Body2>Format JSON:</Body2>
        {!!formatData?.length && JSON.stringify(formatData)}
      </div>

      <div>
        <Body2>Table:</Body2>
        {!!columns.length && <Table columns={columns} data={formatData} />}
      </div>
    </StyledTableGenerate>
  );
};

const StyledTableGenerate = styled.div`
  display: grid;
  grid-gap: 16px;

  span {
    display: block;
  }
`;
