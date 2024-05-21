import styles from "../../../../styles/customNews.module.css";
import { useEffect, useState } from "react";
import ListItem from "./latest-list-item";

export default function LatestNews() {
  const [latestNews, setLatestNews] = useState([]);

  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=50&apiKey=4db170d9535f4dccad0bbd35c58dc6b9";

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLatestNews(data.articles);
      } catch (err) {
        console.log("error");
      }
    };
    fetchLatestNews();
  }, []);

  return (
    <div className={styles.latestContainer}>
      <div className={styles.latestNewsHeader}>
        <h2 className={styles.latestNewsHeading}>Top Headlines</h2>
        <button className={styles.latestbutton}>Expand</button>
      </div>
      <div className={styles.latestNewsFeed}>
        <ul className={styles.lastestNewsList}>
          {latestNews.map((headline) => (
            <ListItem {...headline} />
          ))}

          <ListItem />
        </ul>
      </div>
    </div>
  );
}
