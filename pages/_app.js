import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta
        name="description"
        content="advanced next js learning" />
    </Head>
    <Component {...pageProps} />
  </>;
}
