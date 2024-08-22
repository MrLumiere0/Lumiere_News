import React from "react";

import Link from "next/link";

import Login from "./login";
import { FaRegNewspaper } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { AiOutlineStock } from "react-icons/ai";

export default function Tabs({ currentDisplay }) {
  return (
    <aside className='sidebar '>
      {/* <div className='logo-video'>
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
      </div> */}

      <div className='sidebar-main'>
        <ul className='sidebar-list'>
          <li className='sidebar-item'>
            <Link
              className='sidebar-link'
              href='/news/headline'
              prefetch={true}
            >
              <div className='sidebar-icon'>
                {/* <span className='sidebar-icon-custom'>
                  <ImNewspaper color='white' />
                </span> */}
                <FaRegNewspaper className='sidebar-description' />

                {/* <span className='sidebar-description'>Headline News</span> */}
              </div>
            </Link>
          </li>

          <li className='sidebar-item'>
            <Link className='sidebar-link' href=''>
              <div className='sidebar-icon'>
                {/* <span >
                  <SlCalender color='white' />
                </span> */}

                <SlCalender className='sidebar-description' />

                {/* <span Economic Releases</span> */}
              </div>
            </Link>
          </li>

          <li className='sidebar-item'>
            <Link className='sidebar-link' href=''>
              <div className='sidebar-icon'>
                {/* <span className='sidebar-icon-custom'>
                  <MdShowChart color='white' />
                </span> */}
                {/* <span className='sidebar-description'> Lumiere Trading</span> */}
                <AiOutlineStock className='sidebar-description' />
              </div>
            </Link>
          </li>
        </ul>

        <Login />
      </div>
    </aside>
  );
}
