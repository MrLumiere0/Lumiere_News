import React, { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/sign-in.module.css";
import { sideBarFontLogo } from "../components/utils/font";
import { formValidationSignIn } from "../components/logic";
// import { auth } from "../config/firebase.js";
// import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const userLogin = async (event) => {
    event.preventDefault();
    formValidationSignIn({ email }, { password }, { setErrors });
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setLoginUser(user);
      router("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginModal}>
        <div className={styles.loginVideo}>
          <video
            className={styles.videoLogo}
            src={require("../public/src/butterfly.mp4")}
            autoPlay
            loop
            muted
          />
        </div>
        <div className={styles.loginSection}>
          <h2 id={styles.loginHeader} className={sideBarFontLogo.className}>
            MY ACCOUNT
          </h2>
          <form className={styles.loginForm} onSubmit={userLogin}>
            <input
              type='email'
              name='useremail'
              placeholder='Email...'
              className={styles.loginInput}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            {errors.email && <span>{errors.email}</span>}
            <input
              name='userpassword'
              type='password'
              placeholder='Password...'
              className={styles.loginInput}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {errors.password && <span>{errors.password}</span>}

            <button type='submit' className={styles.formbutton}>
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
