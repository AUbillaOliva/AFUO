import { useRouter } from 'next/router';
import Head from "next/head";
import React from 'react';
import { IntlProvider } from 'react-intl';
import Languages from "../src/translations/translations.json";
import { Provider } from "react-redux";
import store from "../src/redux/store"
import { persistor } from "../src/redux/store";
import { PersistGate } from 'redux-persist/integration/react';

import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {

  const router = useRouter();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/assets/logo/logo-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <IntlProvider locale={router.locale} messages={JSON.parse(JSON.stringify(Languages))[router.locale]}>
        <Component {...pageProps} />
      </IntlProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;