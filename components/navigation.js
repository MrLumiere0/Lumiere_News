import React from "react";
import Search from "./search";
import TimeZone from "./timezone";

export default function Navigation() {
  return (
    <nav className='nav'>
      <div className='time-nav'>
        <TimeZone />
      </div>

      <div className='search-nav'>
        <Search />
      </div>
    </nav>
  );
}
