import React from "react";
import styles from "../styles/homepage.module.css";
import { sideBarFontLogo } from "../styles/utils/font";

export default function Home() {
  return (
    <div className='homepage'>
      <video
        className={styles.lumiereBanner}
        src={require("../public/src/wavey.mp4")}
        autoPlay
        loop
        muted
      />
      <div className={styles.banner}>
        <h2 id={styles.Lumiere} className={sideBarFontLogo.className}>
          Lumiere News
        </h2>

        <h3 id={styles.bannerSubheading} /*className={bannerFont.className}*/>
          What&apos;s happening
          <span className={styles.bannerSubheadingToday}> today?</span>
        </h3>
      </div>
    </div>
  );
}
