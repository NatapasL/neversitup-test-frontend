'use client';

import { FormEvent, ReactElement, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { parseTable } from '../helpers/table';
import { ColumnDefinition, FormatData, SourceTable } from '../types';
import { Button } from './Button';
import { Table } from './Table';
import { Textarea } from './Textarea';

const FormConfig = {
  NAME: `input`,
  LABEL: `Paste JSON here`,
  MAX_LENGTH: 4000,
} as const;

const JSON_FORMAT_ERROR_MESSAGE = `Cant parse to table`;

const sampleTableData = process.env.NEXT_PUBLIC_EXAMPLE_TABLE ?? ``;

export const TableGenerate = (): ReactElement => {
  const form = useForm();
  const [columns, setColumns] = useState<ColumnDefinition[]>([]);
  const [formatData, setFormatData] = useState<FormatData[]>([]);

  const preventDefault = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

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

  return (
    <div>
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

      {!!columns.length && <Table columns={columns} data={formatData} />}
    </div>
  );
};
