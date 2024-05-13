import React from "react";
import Head from "next/head";
import Carousel from "./custom.js/carousel-main";
import Link from "next/link";
import styles from "../../styles/headline.module.css";
import Article from "./custom.js/article-sec";

export default function HeadlineNews() {
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
          <input
            type='text'
            placeholder='Search headlines...'
            className={styles.headlineSearchInput}
          />
        </div>

        <div className={styles.headlineNavCategories}>
          <ul className={styles.categoriesList}>
            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Economics</li>
            </Link>

            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Stocks</li>
            </Link>
            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>Cryptocurrency</li>
            </Link>
            <Link href='' className={styles.headlineLink}>
              <li className={styles.headlineCategory}>International affairs</li>
            </Link>
            {/* <li className='headline-category'>Tech</li> */}
          </ul>
        </div>
      </nav>

      <div className={styles.NewsBanners}>
        <div className={styles.News}>
          <div className={styles.customNewsFeed}>
            <div className={styles.customNewsMain}>
              <Carousel />
            </div>

            <div className={styles.customNewsArticle}>
              <div className={styles.customNewsSec}>
                <Article />
              </div>
              <div className={styles.savedNewsFeed}></div>
            </div>
          </div>

          <div className={styles.latestNewsFeed}>
            <div className={styles.latestNewsHeader}>
              <h2 className={styles.latestNewsHeading}>Latest News</h2>
              <h2 id={styles.latestNewsExpand}>Expand</h2>
            </div>
            <div className={styles.newsFeed}>
              <ul className={styles.lastestNewsList}>
                <li className={styles.latestNewsItem}></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
