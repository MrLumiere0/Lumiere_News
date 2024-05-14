import styles from "../../../styles/customNews.module.css";

import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Image from "next/image";
import car from "../../../public/src/AMGGT63S.jpeg";
import ks from "../../../public/src/kj.webp";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.expand}>
        <button className={styles.button}>Expand</button>
      </div>
      {/* .map function when we fetch data from API 
            turn carousel Card into a component and run through map*/}
      <div className={styles.carouselCard}>
        <div className={styles.cardMain}>
          <div className={styles.carouselImage}>
            <Image src={car} fill={true} objectFit='contain' alt='' />
          </div>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.mainDetails}>
            <h2 className={styles.cardTitle}>Lorem ipsum</h2>
            <h3 className={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
            <p className={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              hendrerit dolor magna eget. Cursus metus aliquam eleifend mi in
              nulla posuere. Pellentesque adipiscing commodo elit at imperdiet
              dui. Enim sit amet venenatis urna cursus eget nunc scelerisque
              viverra. Iaculis eu non diam phasellus vestibulum lorem sed risus
              ultricies. Proin sed libero enim sed. Morbi non arcu risus quis
              varius quam quisque id diam. Sed arcu non odio euismod lacinia at.
              Id ornare arcu odio ut. Nisl nisi scelerisque eu ultrices vitae.
              Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Sit
              amet luctus venenatis lectus magna fringilla urna porttitor.
            </p>
          </div>
          <div className={styles.cardSource}>
            <div className={styles.Source}>
              <p className={styles.sourceName}>Mbusa.com</p>
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
