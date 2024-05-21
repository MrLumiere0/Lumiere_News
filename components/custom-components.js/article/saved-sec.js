import styles from "../../../styles/customNews.module.css";

export default function SavedNews() {
  return (
    <div className={styles.saved}>
      <div className={styles.savedHeader}>
        <h2 className={styles.savedHeading}>Saved Articles</h2>
        <button className={styles.savedButton}>Expand</button>
      </div>
      <div className={styles.savedFeed}>
        <ul className={styles.savedList}>
          {/* <li className={styles.savedHeadline}>
            <div className={styles.savedCardDetails}>
              <h2 className={styles.savedCardTitle}>Lorem Ipsum </h2>
              <h3 className={styles.savedCardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>

            <div className={styles.savedCardSource}>
              <div className={styles.savedSource}>
                <p className={styles.savedSourceName}>Mbusa.com</p>
                <p className={styles.savedSourceDate}>
                  <span className={styles.savedSourceCalender}>
                    <SlCalender />
                  </span>
                  05/13/24
                </p>
              </div>

              <div className={styles.savedFeature}>
                <FaRegBookmark />
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
