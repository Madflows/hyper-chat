import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@contexts/AuthContext";
import {useState, useEffect, useLayoutEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setSSR] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSSR(false)
      
    }, 900);
  }, []);
  if (isSSR) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-transparent border-b-white rounded-full animate-spin"></div>
        <p className="text-white mt-5">Compiling components</p>

        </div>
      </div>
    )
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Hyper</title>
      </Head>
      <AuthProvider>
        <div id="root">
          <Toaster />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </AuthProvider>
    </>
  );
}
