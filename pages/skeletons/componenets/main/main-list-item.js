import styles from "../../../../styles/skeleton/components/components.module.css";
import photo from "../../../../public/src/photo.jpg";

export default function SkeletonMainListItem() {
  return (
    <li className={styles.mainHeadline}>
      <div className={styles.mainCardDetails}>
        <div className={styles.mainImage}>
          {/* <img className={styles.mainDynamicImage} src='' /> */}
          <div className={styles.mainDynamicImage}></div>
        </div>

        <div className={styles.mainDetails}>
          <h2 className={styles.mainCardTitle}></h2>
          {/* <h3 className={styles.mainCardDescription}>Description</h3> */}
          {/* <p className={styles.mainCardContent}>content</p> */}
        </div>
      </div>
      <div className={styles.mainCardSource}>
        <div className={styles.mainSource}>
          <div className={styles.mainSourceName}></div>

          <div className={styles.mainFeature}>
            <button className={styles.viewButton}>View</button>
          </div>
        </div>
      </div>
    </li>
  );
}
