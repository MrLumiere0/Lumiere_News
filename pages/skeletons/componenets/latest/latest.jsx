import styles from "../../../../styles/skeleton/components/components.module.css";
import LatestListItem from "./latet-list-item";

export default function SkeletonLatestList() {
  return (
    <div className={styles.latest}>
      <div className={styles.latestNewsHeader}>
        <h2 className={styles.latestNewsHeading}>Top Headlines</h2>
        <button className={styles.latestbutton}>Expand</button>
      </div>
      <div className={styles.latestNewsFeed}>
        <ul className={styles.lastestNewsList}>
          <LatestListItem />
          <LatestListItem />
          <LatestListItem />
          <LatestListItem />
          <LatestListItem />
          <LatestListItem />
          <LatestListItem />
        </ul>
      </div>
    </div>
  );
}
