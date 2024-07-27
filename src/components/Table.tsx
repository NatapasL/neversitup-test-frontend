import { ReactElement } from 'react';
import { ColumnDefinition, FormatData } from '../types';

export interface TableProps {
  columns: ColumnDefinition[];
  data: FormatData[];
}

export const Table = ({ columns, data }: TableProps): ReactElement => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(
            ({ key, name }) => !!name.length && <th key={key}>{name}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map(
              ({ key, name }) => !!name.length && <td key={key}>{item[key]}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
