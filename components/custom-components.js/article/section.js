import styles from "../../../styles/customNews.module.css";
import { useEffect, useState } from "react";
import SectionListItem from "./section-list-item";

export default function Article() {
  const [searchURL, setSearchURL] = useState(
    "    https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
  );
  const [sectNews, setSectNews] = useState([]);

  const url = { searchURL };
  //     "https://newsapi.org/v2/everything?q=stock%market&apiKey=4db170d9535f4dccad0bbd35c58dc6b9";
  //
  useEffect(() => {
    const fetchSecNews = async () => {
      try {
        // set back to searchURL instead of url when done w modal

        const response = await fetch(searchURL);
        const data = await response.json();
        setSectNews(data.articles);
      } catch (err) {
        console.log("error");
      }
    };

    fetchSecNews();
  }, []);

  return (
    <div className={styles.article}>
      <div className={styles.articleHeader}>
        <h2 className={styles.articleKeyword}>#Technology</h2>
        <button className={styles.articleButton}>Expand</button>
      </div>
      <div className={styles.articleFeed}>
        <ul className={styles.articleList}>
          {sectNews.map((headline) => (
            <SectionListItem {...headline} />
          ))}
        </ul>
      </div>
    </div>
  );
}
