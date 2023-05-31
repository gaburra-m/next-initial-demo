import "@/styles/globals.css";
import { NextPage } from "next";
import { AppProps } from "next/app";
// import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  // getLayout?: (page: ReactElement) => ReactNode; -----> otra forma de hacerlo
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
