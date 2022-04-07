import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

// Store
import { Provider } from 'react-redux';
import { store } from 'store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advanced React - Boilerplate</title>
        <link rel="shorcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Project to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
