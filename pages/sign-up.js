import React, { use, useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/sign-up.module.css";
import { sideBarFontLogo } from "../components/utils/font";
import formValidationSignUp from "../components/static/logic/logic";
// import { auth } from "../config/firebase.js";

export default function SignIn() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const userLogin = async (event) => {
    event.preventDefault();
    formValidationSignUp(
      { firstName },
      { lastName },
      { email },
      { password },
      { confirmPassword },
      { setErrors }
    );
  };

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpModal}>
        <div className={styles.signUpVideo}>
          <video
            className={styles.videoLogo}
            src={require("../public/src/butterfly.mp4")}
            autoPlay
            loop
            muted
          />
        </div>
        <div className={styles.signUpSection}>
          <h2 id={styles.signUpHeader} className={sideBarFontLogo.className}>
            CREATE MY ACCOUNT
          </h2>
          <form className={styles.signUpForm} onSubmit={userLogin}>
            <input
              type='text'
              name='firstname'
              placeholder='First Name...'
              className={styles.signUpInput}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            ></input>
            {errors.first && <span>{errors.first}</span>}

            <input
              type='text'
              name='lastname'
              placeholder='Last Name...'
              className={styles.signUpInput}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
            {errors.last && <span>{errors.last}</span>}

            <input
              type='email'
              name='useremail'
              placeholder='Email...'
              className={styles.signUpInput}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            {errors.email && <span>{errors.email}</span>}
            <input
              name='userpassword'
              type='password'
              placeholder='Password...'
              className={styles.signUpInput}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {errors.password && <span>{errors.password}</span>}

            <input
              name='confirmpassword'
              type='password'
              placeholder='Confirm Password...'
              className={styles.signUpInput}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></input>
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            {errors.match && <span>{errors.match}</span>}

            <button type='submit' className={styles.formbutton}>
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
