import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import styles from "../../../../styles/customNews.module.css";

export default function SectionListItem({ ...headline }) {
  let date = headline.publishedAt;
  date = date.substr(0, 10);

  return (
    <li className={styles.articleHeadline}>
      <div className={styles.articleCardDetails}>
        <div className={styles.articleMainDetails}>
          <h2 className={styles.articleCardTitle}>{headline.title} </h2>
          {/* <h3 className={styles.articleCardDescription}>
            {headline.description}
          </h3> */}
        </div>
      </div>
      <div className={styles.articleCardSource}>
        <div className={styles.articleSource}>
          <p className={styles.articleSourceName}>{headline.source.name}</p>
          <p className={styles.articleSourceDate}>
            <span className={styles.articleSourceCalender}>
              <SlCalender />
            </span>
            {date}
          </p>
          <div className={styles.articleFeature}>
            <FaRegBookmark />
          </div>
        </div>
      </div>
    </li>
  );
}
