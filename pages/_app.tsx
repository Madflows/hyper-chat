import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Hyper</title>
      </Head>
      <div id="root">
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
