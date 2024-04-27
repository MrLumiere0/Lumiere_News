import React from "react";
import { SlCalender } from "react-icons/sl";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { sideBarFont } from "./utils/font";
import { sideBarFontLogo } from "./utils/font";
import { bannerFont } from "./utils/font";
import Login from "./login";

export default function Tabs() {
  return (
    <aside className='sidebar '>
      <div className='logo-video'>
        <video
          className='sidebar-logo'
          src={require("../public/src/butterfly.mp4")}
          autoPlay
          loop
          muted
        />
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
