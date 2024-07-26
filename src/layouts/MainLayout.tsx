'use client';

import { ReactElement, ReactNode } from 'react';
import './main-layout.css';

export interface MainLayoutProps {
  children: ReactNode | ReactNode[];
}

export const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  return (
    <div className="main-layout">
      <div className="wrapper">{children}</div>
    </div>
  );
};
