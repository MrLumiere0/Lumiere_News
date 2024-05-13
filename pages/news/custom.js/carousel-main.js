import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import Image from "next/image";
import AMG from "../../../public/src/AMGGT63S.jpeg";
import styles from "../../../styles/customNews.module.css";
import ks from "../../../public/src/kj.webp";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      {/* .map function */}
      <div className={styles.carouselCard}>
        <div className={styles.cardMain}>
          <div className={styles.expand}>
            <button className={styles.button}>Expand</button>
          </div>
          <div className={styles.carouselImage}>
            <Image src={AMG} fill={true} objectFit='contain' alt='' />
          </div>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.mainDetails}>
            <h2 className={styles.cardTitle}>Mercedes Benz GT 63S 4 Matic</h2>
            <h3 className={styles.cardDescription}>
              The AMG GT 4-door Coupe takes driving performance to dimensions
              far beyond the ordinary.
            </h3>
            <p className={styles.cardContent}>
              Seductively sculpted muscle echoes the strength within. AMG's
              expertise in developing racecars and road cars creates a body
              that's both roomy and rigid. Performance-optimized materials
              include carbon fiber-reinforced polymers.The first four-door
              developed entirely by Mercedes-AMG extends the joys of motoring to
              all its passengers. Seating options for up to five offer a wide
              range of comfort and performance enhancements. Also available: a
              glass Panorama roof, a 3-passenger rear seat, and executive rear
              seating with a center console. Seductively sculpted muscle echoes
              the strength within. AMG's expertise in developing racecars and
              road cars creates a body that's both roomy and rigid.
              Performance-optimized materials include carbon fiber-reinforced
              polymers.The first four-door developed entirely by Mercedes-AMG
              extends the joys of motoring to all its passengers. Seating
              options for up to five offer a wide range of comfort and
              performance enhancements. Also available: a glass Panorama roof, a
              3-passenger rear seat, and executive rear seating with a center
              console.
            </p>
          </div>
          <div className={styles.cardSource}>
            <div className={styles.Source}>
              <p className='source-name'>Mbusa.com</p>
              <p className='source-date'>
                <span className={styles.sourceCalender}>
                  <SlCalender />
                </span>
                05/13/24
              </p>
            </div>

            <div className={styles.features}>
              <FaRegBookmark />
              <h2 className={styles.keyword}>#Economics</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
