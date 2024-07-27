import { Metadata } from 'next';
import { ReactElement } from 'react';
import { TableContainer } from '../../containers';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Todo Generator',
  };
};

const TablePage = (): ReactElement => {
  console.log(process.env.NEXT_PUBLIC_EXAMPLE_TABLE);
  return <TableContainer />;
};

export default TablePage;
