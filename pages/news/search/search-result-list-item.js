import styles from "../../../styles/searchResults.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export default function ResultListItem({ ...headline }) {
  let date = headline.publishedAt;
  date = date.substr(0, 10);

  return (
    <li className={styles.resultHeadline}>
      <div className={styles.resultCardDetails}>
        <div className={styles.resultDetails}>
          <h2 className={styles.resultTitle}>{headline.title}</h2>
          <h2 className={styles.resultDescription}>{headline.description}</h2>
        </div>
      </div>

      <div className={styles.resultImage}>
        <img className={styles.resultDynamicImage} src={headline.urlToImage} />
      </div>

      <div className={styles.resultCardSource}>
        <div className={styles.resultSource}>
          <div className={styles.nameContainer}>
            <span className={styles.resultSourceName}>
              {headline.source.name}
            </span>
          </div>
          <div className={styles.Save}>
            <span className={styles.resultSourceDate}>{date}</span>

            <span className={styles.resultFeature}>
              <FaRegBookmark />
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
