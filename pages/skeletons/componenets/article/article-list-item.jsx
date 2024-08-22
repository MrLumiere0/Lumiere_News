import styles from "../../../../styles/skeleton/components/components.module.css";

export default function SectionListItem() {
  return (
    <li className={styles.articleHeadline}>
      <div className={styles.articleCardDetails}>
        <div className={styles.articleMainDetails}>
          <h2 className={styles.articleCardTitle}> </h2>
          {/* <h3 className={styles.articleCardDescription}>
            {headline.description}
          </h3> */}
        </div>
      </div>
      <div className={styles.articleCardSource}>
        <div className={styles.articleSource}>
          <p className={styles.articleSourceName}></p>
          <p className={styles.articleSourceDate}></p>
          <div className={styles.articleFeature}>
            <button className={styles.viewButton}>View</button>
          </div>
        </div>
      </div>
    </li>
  );
}
