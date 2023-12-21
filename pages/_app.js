import Head from "next/head";

import "../styles/globals.css";

import localFont from '@next/font/local'

const nanum = localFont({
  // src: './../font/NanumSquareNeo-Variable.woff2',
  src: [
    {
      path: './../font/NanumSquareNeoTTF-cBd.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../font/NanumSquareNeoTTF-dEb.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../font/NanumSquareNeoTTF-eHv.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
})

import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';

export default function ({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Seoul"
      messages={pageProps.messages}
    >
    <>
      <Head>
        <title>IOES Lab.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
  
      <main className={`${nanum.className}`}>
      <Component  {...pageProps} />
      </main>
    </>
    </NextIntlClientProvider>
  );
}
