import styles from "../../../styles/searchResults.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export default function ResultListItem() {
  // let date = headline.publishedAt;
  // date = date.substr(0, 10);

  return (
    <li className={styles.resultHeadline}>
      <div className={styles.resultCardDetails}>
        <div className={styles.resultDetails}>
          <h2 className={styles.resultTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fermentum vulputate.
          </h2>
          <h2 className={styles.resultDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            ornare sapien. Praesent sagittis pharetra bibendum. Etiam vitae
            metus mi. Maecenas at urna ullamcorper, posuere.
          </h2>
        </div>

        <div className={styles.resultImage}>
          <img className={styles.resultDynamicImage} src='' />
        </div>
      </div>

      <div className={styles.resultCardSource}>
        <div className={styles.resultSource}>
          <span className={styles.resultSourceName}>Source Name</span>

          <span className={styles.resultSourceCalender}>
            <SlCalender />
            <span className={styles.resultSourceDate}>Date</span>
          </span>

          <span className={styles.resultFeature}>
            <FaRegBookmark />
          </span>
        </div>
      </div>
    </li>
  );
}
