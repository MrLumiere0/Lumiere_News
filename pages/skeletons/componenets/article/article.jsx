import styles from "../../../../styles/skeleton/components/components.module.css";
import SectionListItem from "./article-list-item";

export default function SkeletonArticleList() {
  return (
    <div className={styles.article}>
      <div className={styles.articleHeader}>
        <h2 className={styles.articleKeyword}>#Technology</h2>
        <button className={styles.articleButton}>Expand</button>
      </div>
      <div className={styles.articleFeed}>
        <ul className={styles.articleList}>
          <SectionListItem />
          <SectionListItem />
          <SectionListItem />
          <SectionListItem />
          <SectionListItem />
        </ul>
      </div>
    </div>
  );
}
