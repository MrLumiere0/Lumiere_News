import React from "react";
import { bannerFont } from "../components/utils/font";

export default function Home() {
  return (
    <main className='homepage'>
      <video
        className='lumiere-banner'
        src={require("../public/src/wavey.mp4")}
        autoPlay
        loop
        muted
      />
      <div className='banner'>
        <h2 id='Lumiere'>Lumiere Holdings</h2>

        <h3 id='banner-subheading' className={bannerFont.className}>
          Making trading (i)ntuitive
        </h3>
      </div>
    </main>
  );
}
