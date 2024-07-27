import { ReactElement } from 'react';
import { TableContainer } from '../../containers';

const TablePage = (): ReactElement => {
  console.log(process.env.NEXT_PUBLIC_EXAMPLE_TABLE);
  return <TableContainer />;
};

export default TablePage;
