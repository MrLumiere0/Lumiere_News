import styles from "../../../styles/customNews.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.articleExpand}>
        <h2 className={styles.articleKeyword}>#Stocks</h2>
        <button className={styles.articleButton}>Expand</button>
      </div>
      <div className={styles.articleList}>
        <ul className={styles.list}>
          <li className={styles.articleHeadline}>
            <div className={styles.articleCardDetails}>
              <div className={styles.articleMainDetails}>
                <h2 className={styles.articleCardTitle}>
                  Mercedes Benz GT 63S 4 Matic
                </h2>
                <h3 className={styles.articleCardDescription}>
                  The AMG GT 4-door Coupe takes driving performance to
                  dimensions far beyond the ordinary.{" "}
                </h3>
              </div>
            </div>
            <div className={styles.articleCardSource}>
              <div className={styles.articleSource}>
                <p className='source-name'>Mbusa.com</p>
                <p className='source-date'>
                  <span className={styles.articleSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.articleFeatures}>
                <FaRegBookmark />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
