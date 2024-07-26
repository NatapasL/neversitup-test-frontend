import { ReactElement } from 'react';
import { MainLayout } from '../layouts';

export const metadata = { title: 'Todo', description: `Todo Application` };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
