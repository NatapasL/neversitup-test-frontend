import type { Metadata } from 'next';
import { APPLICATION_NAME, AUTHOR, DESCRIPTION } from './constant';

export const parseMetaData = (hostName: string): Metadata => {
  return {
    title: {
      default: APPLICATION_NAME,
      template: `%s | Todo`,
    },
    description: DESCRIPTION,
    openGraph: {
      title: APPLICATION_NAME,
      description: DESCRIPTION,
      url: hostName,
      siteName: APPLICATION_NAME,
    },
    generator: `Next.js`,
    applicationName: APPLICATION_NAME,
    referrer: `origin-when-cross-origin`,
    keywords: [`Next.js`, `React`, `JavaScript`, `Todo`, APPLICATION_NAME],
    authors: [{ name: AUTHOR }],
    creator: AUTHOR,
    publisher: AUTHOR,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': `large`,
        'max-snippet': -1,
      },
    },
  };
};
