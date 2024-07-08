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

      <div id='View'>
        <div className='side-banner'>
          <Tabs currentDisplay={Component} />
        </div>

        <div className='main-display'>
          <Navigation />
          <SearchContext>
            <div className='display'>
              <Component {...pageProps} />
            </div>
          </SearchContext>
        </div>
      </div>
    </div>
  );
}
