import styles from "../../../styles/customNews.module.css";
import { useEffect, useState } from "react";
import ListItem from "./latest-list-item";

export default function LatestNews() {
  const [searchURL, setSearchURL] = useState(
    "    https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
  );
  const [latestNews, setLatestNews] = useState([]);

  const url = { searchURL };

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        // set back to searchURL instead of url when done w modal

        const response = await fetch(searchURL);
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
        </ul>
      </div>
    </div>
  );
}
