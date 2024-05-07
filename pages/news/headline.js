import React from "react";
import Head from "next/head";
import Carousel from "./custom.js/Carousel-main";

export default function HeadlineNews() {
  return (
    <div className='Headlines'>
      <>
        <Head>
          <title>Headline News</title>
          <meta name='Headlines' />
        </Head>
      </>
      <nav className='headline-nav'>
        <div className='headline-nav-search'>
          <input
            type='text'
            placeholder='Search headlines...'
            className='headline-search-input'
          />
        </div>

        <div className='headline-nav-categories'>
          <ul className='categories-list'>
            <li className='headline-category'>Economics</li>
            <li className='headline-category'>Stocks</li>
            <li className='headline-category'>Cryptocurrency</li>
            <li className='headline-category'>International affairs</li>
            {/* <li className='headline-category'>Tech</li> */}
          </ul>
        </div>
      </nav>

      <div className='News-Banners'>
        <div className='News'>
          <div className='custom-news-feed'>
            <div className='custom-news-main'>
              <Carousel />
            </div>

            <div className='custom-news-article'>
              <div className='custom-news-sec'></div>
              <div className='saved-news-feed'></div>
            </div>
          </div>

          <div className='latest-news-feed'>
            <div className='latest-news-header'>
              <h2 className='latest-news-heading'>Latest News</h2>
              <h2 id='latest-news-expand'>Expand</h2>
            </div>
            <div className='news-feed'>
              <ul className='lastest-news-list'>
                <li className='latest-news-item'></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
