import React from "react";
import styles from "../../../../styles/customNews.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function ListItem({ ...headline }) {
  let date = headline.publishedAt;
  date = date.substr(0, 10);

  return (
    <li className={styles.latestHeadline}>
      <div className={styles.latestCardDetails}>
        <h2 className={styles.latestCardTitle}>{headline.title}</h2>
        {/* <h3 className={styles.latestCardDescription}>{headline.description}</h3> */}
      </div>

      <div className={styles.latestCardSource}>
        <div className={styles.latestSource}>
          <p className={styles.latestSourceName}>{headline.source.name}</p>
          <p className={styles.latestSourceDate}>
            <span className={styles.latestSourceCalender}>
              <SlCalender />
            </span>
            {date}
          </p>
        </div>

        <div className={styles.latestFeature}>
          <FaRegBookmark />
        </div>
      </div>
    </li>
  );
}
