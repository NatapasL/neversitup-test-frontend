import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ReactElement, ReactNode } from 'react';
import { MODAL_ROOT_ID } from '../constants';
import { MainLayout } from '../layouts';
import { parseJsonLd, parseMetaData } from '../schema';
import '../styles/global.css';

const getHostName = (): string => {
  const heads = headers();
  return heads.get(`hostname`) || ``;
};

export const generateMetadata = async (): Promise<Metadata> => {
  return parseMetaData(getHostName());
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const jsonLd = parseJsonLd(getHostName());

  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
          <div id={MODAL_ROOT_ID}></div>
        </MainLayout>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
