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
          <title>Lumiere Trading</title>
        </Head>
      </>

      <div id='View'>
        <div className='main-display'>
          <SearchContext>
            <Navigation />
            <div className='display'>
              <div className='side-banner'>
                <Tabs currentDisplay={Component} />
              </div>
              <div className='currentDisplay'>
                <Component {...pageProps} />
              </div>
            </div>
          </SearchContext>
        </div>
      </div>
    </div>
  );
}
