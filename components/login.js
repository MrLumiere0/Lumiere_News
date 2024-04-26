import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <div className='sb-login'>
        <ul id='sidebar-login'>
          <li className='sidebar-login-item'>
            <a className='sidebar-login-link' href=''>
              <span className='sidebar-icon'>
                <FaRegUserCircle color='white' />
              </span>
              {/* <span className='sidebar-description'> Portal</span> */}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
