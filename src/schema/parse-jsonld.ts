import type { SoftwareApplication, WithContext } from 'schema-dts';
import { APPLICATION_NAME, AUTHOR, DESCRIPTION } from './constant';

export const parseJsonLd = (
  hostName: string
): WithContext<SoftwareApplication> => {
  return {
    '@context': `https://schema.org`,
    '@type': `SoftwareApplication`,
    name: APPLICATION_NAME,
    image: `${hostName}/todo.jpeg`,
    description: DESCRIPTION,
    applicationCategory: [
      `LifestyleApplication`,
      `BrowserApplication`,
      `UtilitiesApplication`,
    ],
    operatingSystem: `ALL`,
    applicationSuite: `${AUTHOR}'s ${APPLICATION_NAME}`,
    availableOnDevice: `ALL`,
    countriesSupported: `TH`,
    featureList: [`Add todo`, `Update todo`, `Delete todo`],
    screenshot: `${hostName}/todo.jpeg`,
    softwareVersion: `0.0.1`,
    offers: {
      '@type': 'Offer',
      price: '0',
    },
  };
};
