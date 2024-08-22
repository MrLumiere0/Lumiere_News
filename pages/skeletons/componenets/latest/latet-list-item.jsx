import React from "react";
import styles from "../../../../styles/skeleton/components/components.module.css";

export default function LatestListItem() {
  return (
    <li className={styles.latestHeadline}>
      <div className={styles.latestCardDetails}>
        <h2 className={styles.latestCardTitle}></h2>
        {/* <h3 className={styles.latestCardDescription}>{headline.description}</h3> */}
      </div>

      <div className={styles.latestCardSource}>
        <div className={styles.latestSource}>
          <p className={styles.latestSourceName}></p>
          <p className={styles.latestSourceDate}></p>

          <div className={styles.latestFeature}>
            <button className={styles.viewButton}>View</button>
          </div>
        </div>
      </div>
    </li>
  );
}
