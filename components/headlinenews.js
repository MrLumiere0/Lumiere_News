import React from "react";

export default function HeadlineNews() {
  return (
    <div className='Headlines'>
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
            <li className='headline-category'>Tech </li>
            <li className='headline-category'>Finance</li>
            <li className='headline-category'>Commodities</li>
            <li className='headline-category'>International Affairs</li>
          </ul>
        </div>
      </nav>

      <div className='News-Banners'>
        <div className='News'>
          <div className='custom-news-feed'>
            <div className='custom-news-main'></div>

            <div className='custom-news-article'>
              <div className='custom-news-sec'></div>
              <div className='custom-news-tert'></div>
            </div>
          </div>
          <div className='latest-news-feed'>
            <div className='latest-news-header'>
              <h2 className='latest-news-heading'>Latest News</h2>
              <h2 id='latest-news-expand'>Expand</h2>
            </div>
            <ul className='lastest-news-list'>
              <li className='latest-news-item'></li>
              <li className='latest-news-item'></li>
              <li className='latest-news-item'></li>
              <li className='latest-news-item'></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
