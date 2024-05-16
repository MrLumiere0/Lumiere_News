import styles from "../../../styles/customNews.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function LatestNews() {
  return (
    <div className={styles.latestContainer}>
      <div className={styles.latestNewsHeader}>
        <h2 className={styles.latestNewsHeading}>Latest News</h2>
        <button className={styles.latestbutton}>Expand</button>
      </div>
      <div className={styles.latestNewsFeed}>
        <ul className={styles.lastestNewsList}>
          <li className={styles.latestHeadline}>
            <div className={styles.latestCardDetails}>
              <h2 className={styles.latestCardTitle}>Lorem Ipsum </h2>
              <h3 className={styles.latestCardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>

            <div className={styles.latestCardSource}>
              <div className={styles.latestSource}>
                <p className={styles.latestSourceName}>Mbusa.com</p>
                <p className={styles.sourceDate}>
                  <span className={styles.latestSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.latestFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
