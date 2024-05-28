import "../styles/globals.scss";
import Navigation from "../components/static/navigation";
import Tabs from "../components/static/tabs";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  console.log({ Component });

  return (
    <div className='App'>
      <>
        <Head>
          <title>Lumiere News</title>
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
