import "../styles/globals.scss";
import Navigation from "../components/static/navigation";
import Tabs from "../components/static/tabs";
import Head from "next/head";
import SearchContext from "../components/static/logic/search-context";
export default function App({ Component, pageProps }) {
  return (
    <div className='App'>
      <>
        <Head>
          <title>Lumiere News</title>
        </Head>
      </>

      <div id='home-index'>
        <div className='side-banner'>
          <Tabs currentDisplay={Component} />
        </div>

        <div className='main-banner-homepage'>
          <Navigation />
          <SearchContext>
            <Component {...pageProps} />
          </SearchContext>
        </div>
      </div>
    </div>
  );
}
