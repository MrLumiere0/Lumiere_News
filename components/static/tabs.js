import React from "react";
import { SlCalender } from "react-icons/sl";
import { ImNewspaper } from "react-icons/im";
import { MdShowChart } from "react-icons/md";
import Link from "next/link";

import Login from "./login";

export default function Tabs({ currentDisplay }) {
  return (
    <aside className='sidebar '>
      <div className='logo-video'>
        {currentDisplay.name == "Home" || "SignIn" ? (
          <div className='logo-video'> </div>
        ) : (
          <Link className='sidebar-link' href='/'>
            <video
              className='sidebar-logo'
              src={require("../public/src/butterfly.mp4")}
              autoPlay
              loop
              muted
            />
          </Link>
        )}
      </div>

      <div className='sidebar-main'>
        <ul className='sidebar-list'>
          <li className='sidebar-item'>
            <Link
              className='sidebar-link'
              href='/news/headline'
              prefetch={true}
            >
              <div className='sidebar-icon'>
                <span className='sidebar-icon-custom'>
                  <ImNewspaper color='white' />
                </span>
                <span className='sidebar-description'>Headline News</span>
              </div>
            </Link>
          </li>

          <li className='sidebar-item'>
            <Link className='sidebar-link' href='/portal/search-modal'>
              <div className='sidebar-icon'>
                <span className='sidebar-icon-custom'>
                  <SlCalender color='white' />
                </span>
                <span className='sidebar-description'>Economic Release</span>
              </div>
            </Link>
          </li>

          <li className='sidebar-item'>
            <Link className='sidebar-link' href=''>
              <div className='sidebar-icon'>
                <span className='sidebar-icon-custom'>
                  <MdShowChart color='white' />
                </span>
                <span className='sidebar-description'> Live Charts</span>
              </div>
            </Link>
          </li>
        </ul>

        <Login />
      </div>
    </aside>
  );
}
