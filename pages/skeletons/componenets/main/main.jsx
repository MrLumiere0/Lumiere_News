import styles from "../../../../styles/skeleton/components/components.module.css";
import SkeletonMainListItem from "./main-list-item";

export default function SkeletonMainList() {
  return (
    <div className={styles.main}>
      <div className={styles.mainHeader}>
        <h2 className={styles.keyword}>#Finance</h2>

        <button className={styles.mainButton}>Expand</button>
      </div>

      <div className={styles.mainFeed}>
        <ul className={styles.mainList}>
          <SkeletonMainListItem />
          <SkeletonMainListItem />
          <SkeletonMainListItem />
          <SkeletonMainListItem />
          <SkeletonMainListItem />
          <SkeletonMainListItem />
          <SkeletonMainListItem />
        </ul>
      </div>
    </div>
  );
}
