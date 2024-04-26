import React from "react";
import { SlCalender } from "react-icons/sl";
import { ImNewspaper } from "react-icons/im";
import Login from "./login";

export default function Tabs() {
  return (
    <aside className='sidebar '>
      <div className='sidebar-logo'>
        <img src='./' />
      </div>

      <div className='sidebar-main'>
        <ul className='sidebar-list'>
          <li className='sidebar-item'>
            <a className='sidebar-link' href=''>
              <span className='sidebar-icon'>
                <SlCalender color='white' />
              </span>
              {/* <span className='sidebar-description'>Economic Releases</span> */}
            </a>
          </li>
          <li className='sidebar-item'>
            <a className='sidebar-link' href=''>
              <span className='sidebar-icon'>
                <ImNewspaper color='white' />
              </span>
              {/* <span className='sidebar-description'>Headline News</span> */}
            </a>
          </li>
        </ul>

        <Login />
      </div>
    </aside>
  );
}