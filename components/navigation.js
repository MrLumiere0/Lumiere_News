import React from "react";
import TimeZone from "./timezone";

export default function Navigation() {
  return (
    <nav className='nav'>
      <div className='time-nav'>
        <TimeZone />
      </div>
      <div className='search-nav'>
        <input type='text' placeholder='Search' className='main-search' />
      </div>
    </nav>
  );
}
