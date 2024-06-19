import React from "react";
import styles from "../../../styles/customNews.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function ListItem({ ...headline }) {
  let date = headline.publishedAt;
  date = date.substr(0, 10);

  function viewArticle(url) {
    console.log(url);
    window.open(url, "_blank");
  }

  return (
    <li className={styles.latestHeadline}>
      <div className={styles.latestCardDetails}>
        <h2 className={styles.latestCardTitle}>{headline.title}</h2>
        {/* <h3 className={styles.latestCardDescription}>{headline.description}</h3> */}
      </div>

      <div className={styles.latestCardSource}>
        <div className={styles.latestSource}>
          <p className={styles.latestSourceName}>{headline.source.name}</p>
          <p className={styles.latestSourceDate}>{date}</p>

          <div className={styles.latestFeature}>
            <button
              onClick={(e) => viewArticle(e.target.value)}
              value={headline.url}
              className={styles.viewButton}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
