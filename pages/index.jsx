import React from "react";
import styles from "../styles/homepage.module.css";
import { sideBarFontLogo } from "../styles/utils/font";

export default function Home() {
  return (
    <div className='home'>
      <video
        className={styles.video}
        src={require("../public/src/wavey.mp4")}
        autoPlay
        loop
        muted
        width={100}
      />
      <div className={styles.banner}>
        <h2 id={styles.Lumiere} className={sideBarFontLogo.className}>
          Lumiere Trading
        </h2>

        <h3 id={styles.bannerSubheading} /*className={bannerFont.className}*/>
          {/* What&apos;s happening */}
          Where trading meets
          <span className={styles.bannerSubheadingToday}> Consistency</span>
        </h3>
      </div>
    </div>
  );
}
