import { ColumnDefinition } from './ColumnDefinition';
import { Data } from './TableData';

export type FormatData = Record<ColumnDefinition['key'], Data>;
