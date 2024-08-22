import React from "react";
import Head from "next/head";
import MainList from "../../components/custom-components.js/main/main";
import Link from "next/link";
import styles from "../../styles/headline.module.css";
import Article from "../../components/custom-components.js/article/section";
import LatestNews from "../../components/custom-components.js/latest/latest";
import SavedNews from "../../components/custom-components.js/article/saved-sec";

export default function HeadlineNews() {
  return (
    <div className={styles.Headlines}>
      <>
        <Head>
          <title>Headline News</title>
          <meta name='Headlines' />
        </Head>
      </>

      <div className={styles.NewsBanners}>
        <div className={styles.News}>
          <div className={styles.customNewsFeed}>
            <div className={styles.customNewsMain}>
              <MainList />
            </div>

            <div className={styles.customNewsArticle}>
              <div className={styles.customNewsSec}>
                <Article />
              </div>
              <div className={styles.customSavedNews}>
                <SavedNews />
              </div>
            </div>
          </div>

          <div className={styles.latestNewsFeed}>
            <nav className={styles.headlineNav}>
              {/* <div className={styles.banner}>
          <h2 className={styles.banner}>Lumiere News</h2>
        </div> */}
              <div className={styles.headlineNavCategories}>
                <ul className={styles.categoriesList}>
                  <Link href='' className={styles.headlineLink}>
                    <li className={styles.headlineCategory}>Business</li>
                  </Link>

                  <Link href='' className={styles.headlineLink}>
                    <li className={styles.headlineCategory}>Stocks</li>
                  </Link>

                  <Link href='' className={styles.headlineLink}>
                    <li className={styles.headlineCategory}>Crypto</li>
                  </Link>

                  <Link href='' className={styles.headlineLink}>
                    <li className={styles.headlineCategory}>Technology</li>
                  </Link>
                </ul>
              </div>
            </nav>
            <LatestNews />
          </div>
        </div>
      </div>
    </div>
  );
}
