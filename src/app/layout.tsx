import { ReactElement, ReactNode } from 'react';
import { MODAL_ROOT_ID } from '../constants';
import { MainLayout } from '../layouts';
import '../styles/global.css';

export const metadata = {
  title: 'Todo',
  description: `Todo Application`,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
          <div id={MODAL_ROOT_ID}></div>
        </MainLayout>
      </body>
    </html>
  );
}
