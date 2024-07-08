import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div id='sb-login'>
        <ul id='login-list'>
          <li className='login-list-item'>
            <Link className='sidebar-link' href='/sign-in'>
              <div className='sidebar-icon'>
                <span className='login-icon'>
                  <FaRegUserCircle color='white' />
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
