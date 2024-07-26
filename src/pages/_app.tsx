import { AppProps } from 'next/app';
import { ReactElement } from 'react';

const CustomApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default CustomApp;
