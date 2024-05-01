import React from "react";
import TimeZone from "./timezone";

export default function Navigation() {
  return (
    <div className='nav'>
      <div className='time-nav'>
        <TimeZone />
      </div>
      <div className='search-nav'>
        <input
          type='text'
          placeholder='Search the website...'
          className='main-search'
        />
      </div>
    </div>
  );
}
