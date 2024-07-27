import { ColumnDefinition } from './ColumnDefinition';
import { DataGroup } from './TableDataGroup';

export interface SourceTable {
  columns: ColumnDefinition[];
  data: DataGroup[];
}
