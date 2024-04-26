import React from "react";
import { bannerFont } from "./utils/font";

export default function Home() {
  return (
    <main className='homepage'>
      <video
        className='lumiere-banner'
        src={require("../public/src/butterfly.mp4")}
        autoPlay
        loop
        muted
      />
      <div className='banner'>
        <h2 id='Lumiere' className={bannerFont.className}>
          Lumiere Trading
        </h2>
      </div>
    </main>
  );
}
