import { AppProps } from "next/app";
import { MainLayout } from "../layouts";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default CustomApp;
