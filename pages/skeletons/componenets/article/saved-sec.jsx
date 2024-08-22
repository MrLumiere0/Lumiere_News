import styles from "../../../../styles/skeleton/components/components.module.css";

export default function SkeletonSavedNews() {
  return (
    <div className={styles.saved}>
      <div className={styles.savedHeader}>
        <h2 className={styles.savedHeading}>Saved Searches</h2>
        <button className={styles.savedButton}>Expand</button>
      </div>
      <div className={styles.savedFeed}>
        <ul className={styles.savedList}></ul>
      </div>
    </div>
  );
}
