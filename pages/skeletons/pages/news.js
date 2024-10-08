import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/skeleton/headline.module.css";
import SkeletonMainList from "../componenets/main/main.jsx";
import SkeletonArticleList from "../componenets/article/article.jsx";
import SkeletonLatestList from "../componenets/latest/latest.jsx";
import SkeletonSavedNews from "../componenets/article/saved-sec.jsx";

export default function SkeletonHeadlineNews() {
  return (
    <div className={styles.Headlines}>
      <>
        <Head>
          <title>Headline News</title>
          <meta name='Headlines' />
        </Head>
      </>
      <nav className={styles.headlineNav}>
        <div className={styles.headlineNavSearch}>
          <button className={styles.headlineSearchInput}>
            Search Headlines
          </button>
        </div>

        <div className={styles.headlineNavCategories}>
          <ul className={styles.categoriesList}>
            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Business</li>
            </Link>

            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Technology</li>
            </Link>
            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Science</li>
            </Link>
            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Stock Market</li>
            </Link>
            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Cryptocurrency</li>
            </Link>
          </ul>
        </div>
      </nav>

      <div className={styles.NewsBanners}>
        <div className={styles.News}>
          <div className={styles.customNewsFeed}>
            <div className={styles.customNewsMain}>
              <SkeletonMainList />
            </div>

            <div className={styles.customNewsArticle}>
              <div className={styles.customNewsSec}>
                <SkeletonArticleList />
              </div>
              <div className={styles.customSavedNews}>
                <SkeletonSavedNews />
              </div>
            </div>
          </div>

          <div className={styles.latestNewsFeed}>
            <SkeletonLatestList />
          </div>
        </div>
      </div>
    </div>
  );
}
