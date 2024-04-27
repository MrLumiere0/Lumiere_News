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
            <li className='headline-category'>Internatinal Affairs</li>
          </ul>
        </div>
      </nav>

      <div className='News-Banners'>
        <div className='News'>lorem ipsum</div>
      </div>
    </div>
  );
}
