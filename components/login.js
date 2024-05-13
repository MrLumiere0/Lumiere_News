import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className='sb-login'>
        <ul id='sidebar-login'>
          <li className='sidebar-login-item'>
            <Link className='sidebar-link' href=''>
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
