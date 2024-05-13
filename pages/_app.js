import "../styles/globals.scss";
import Navigation from "../components/navigation";
import Tabs from "../components/tabs";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  console.log({ Component });

  return (
    <div className='App'>
      <>
        <Head>
          <title>Lumiere Trading</title>
        </Head>
      </>

      <div className='home-index'>
        <div className='side-banner'>
          <Tabs currentDisplay={Component} />
        </div>

        <div className='main-banner-homepage'>
          <Navigation />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
