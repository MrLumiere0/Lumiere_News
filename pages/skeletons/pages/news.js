import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/skeleton/headline.module.css";
import SkeletonMainList from "../componenets/main/main";

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
              <div className={styles.customNewsSec}></div>
              <div className={styles.customSavedNews}></div>
            </div>
          </div>

          <div className={styles.latestNewsFeed}></div>
        </div>
      </div>
    </div>
  );
}
