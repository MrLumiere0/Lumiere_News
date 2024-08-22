import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiDashboard3Line } from "react-icons/ri";

import Link from "next/link";

export default function Login() {
  return (
    <>
      <div id='sb-login'>
        <ul id='login-list'>
          <li className='login-list-item'>
            {/* <Link href='' className='action-link'>
              <div className='action-button'>
                <span className='action'>Features / Pricing</span>
              </div>
            </Link>

            <Link href='/sign-up' className='action-link'>
              <div className='action-button'>
                <span className='action'>Sign Up</span>
              </div>
            </Link>

            <Link href='/sign-up' className='action-link'>
              <div className='action-button'>
                <span className='action'>Sign In</span>
              </div>
            </Link> */}
            <Link className='sidebar-link' href='/sign-in'>
              <div className='sidebar-icon'>
                <span className='login-icon'>
                  <RiDashboard3Line className='login-description' />
                </span>
              </div>
            </Link>
          </li>

          <li className='login-list-item'>
            <Link className='sidebar-link' href='/sign-up'>
              <div className='sidebar-icon'>
                <FaRegUserCircle className='login-description' />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
