import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { TableContainer } from '../../containers';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Table Generator',
  };
};

const TablePage = (): ReactElement => {
  return <TableContainer />;
};

export default TablePage;
