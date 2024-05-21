import React from "react";
import TimeZone from "./timezone";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className='nav'>
      <div className='time-nav'>
        <TimeZone />
      </div>
      <div className='call-to-action'>
        {/* <input
          type='text'
          placeholder='Search the website...'
          className='main-search'
        /> */}

        <Link href='' className='feature'>
          <div className='action-button'>
            <span className='action'>Features / Pricing</span>
          </div>
        </Link>

        <Link href='' className='action-link'>
          <div className='action-button'>
            <span className='action'>Sign Up</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
